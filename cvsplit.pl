use strict;
use warnings;
use autodie;
use utf8::all;

use feature qw/switch say/;
use experimental qw/switch/;
use YAML::Tiny;

my $infile = 'data.yaml';
my @outfile = qw/french.out.yaml english.out.yaml/;

# translations of months
my @months = (
    [qw/janv. févr. mars avr. mai juin juil. août sept. oct. nov. déc./],
    [qw/Jan. Feb. Mar. Apr. May June July Aug. Sept. Oct. Nov. Dec./]
);

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

# Traverses the data structure
# Splits fields containing '!' in two
# Converts dates in local format
sub traverse {
    my ($in) = @_;
    for (ref $in) {
        when ('') {
            my ($fr, $en);
            # Some of them are empty
            if ($in && $in =~ /!/) {
                ($fr, $en) = split /\s*!\s*/, $in;
            } else {
                ($fr, $en) = ($in, $in);
            }
            # convert month names
            # add a non-breaking space
            $fr =~ s{(\d\d)/(?=\d\d\d\d)}{$months[0][$1 - 1] . '\ '}eg;
            $en =~ s{(\d\d)/(?=\d\d\d\d)}{$months[1][$1 - 1] . '\ '}eg;
            return ($fr, $en);
        }
        when ('ARRAY') {
            return sep_array map { [ traverse($_)] } @$in;
        }
        when ('HASH') {
            return sep_hash map { $_ => [ traverse($in->{$_}) ] } keys %$in;
        }
        default {
            die $in;
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
