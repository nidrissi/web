use strict;
use warnings;

use feature qw/switch say/;
use experimental qw/switch/;
use YAML::Tiny;
use XXX;

my $infile = 'cv.yaml';
my @outfile = qw(french.out.yaml english.out.yaml);

# Split an array of pairs into a pair of arrays
sub sep_array {
    my (@out0, @out1);
    for (@_) {
        push @out0, $_->[0];
        push @out1, $_->[1];
    }
    return \@out0, \@out1;
}

# Split a hash of pairs into a pair of hashes
sub sep_hash {
    my %in = @_;
    my (%out0, %out1);
    for my $k (keys %in) {
        $out0{$k} = $in{$k}[0];
        $out1{$k} = $in{$k}[1];
    }
    return \%out0, \%out1;
}

sub traverse {
    my ($in) = @_;
    for (ref $in) {
        when ('') {
            # Some of them are empty
            if ($in && $in =~ /!/) {
                return split /\s*!\s*/, $in;
            } else {
                return ($in, $in);
            }
        }
        when ('ARRAY') {
            return sep_array map { [ traverse($_)] } @$in;
        }
        when ('HASH') {
            return sep_hash map { $_ => [ traverse($in->{$_}) ] } keys %$in;
        }
        default {
            XXX $in;
        }
    }
}

my $input = YAML::Tiny->read($infile);
my @result = traverse $input->[0];
for my $i (0..$#result) {
    my $yaml = YAML::Tiny->new($result[$i]);
    $yaml->write($outfile[$i]);
    open my $fh, '>>' . $outfile[$i];
    say $fh '...';              # needed by pandoc
}
