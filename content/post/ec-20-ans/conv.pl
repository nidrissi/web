#!perl

use strict;
use warnings;
use v5.28;

use Text::CSV qw/csv/;
use JSON;

my @indata = @{csv(in => "demos.csv", headers => "auto")};
my @outdata;

for my $row (@indata) {
    my $entry = {
        section => $row->{Section},
        nom => $row->{Nom},
        groupe => $row->{Groupe},
        mcf => [
            { year => 1998, num => $row->{MCF98}},
            { year => 2003, num => $row->{MCF03}},
            { year => 2008, num => $row->{MCF08}},
            { year => 2013, num => $row->{MCF13}},
            { year => 2018, num => $row->{MCF18}},
        ],
        pr => [
            { year => 1998, num => $row->{PR98}},
            { year => 2003, num => $row->{PR03}},
            { year => 2008, num => $row->{PR08}},
            { year => 2013, num => $row->{PR13}},
            { year => 2018, num => $row->{PR18}},
        ],
    };
    push @outdata, $entry;
}

my $json = encode_json \@outdata;
say $json;
