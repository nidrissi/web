/*************************************************
 *  Academic: the personal website framework for Hugo.
 *  https://github.com/gcushen/hugo-academic
 **************************************************/

(function($){

  /* ---------------------------------------------------------------------------
   * Filter publications.
   * --------------------------------------------------------------------------- */

  let $grid_pubs = $('#container-publications');
  $grid_pubs.isotope({
    itemSelector: '.isotope-item',
    percentPosition: true,
    masonry: {
      // Use Bootstrap compatible grid layout.
      columnWidth: '.grid-sizer'
    }
  });

  // Active publication filters.
  let pubFilters = {};

  // Flatten object by concatenating values.
  function concatValues( obj ) {
    let value = '';
    for ( let prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }

  $('.pub-filters').on( 'change', function() {
    let $this = $(this);

    // Get group key.
    let filterGroup = $this[0].getAttribute('data-filter-group');

    // Set filter for group.
    pubFilters[ filterGroup ] = this.value;

    // Combine filters.
    let filterValues = concatValues( pubFilters );

    // Activate filters.
    $grid_pubs.isotope({ filter: filterValues });

    // If filtering by publication type, update the URL hash to enable direct linking to results.
    if (filterGroup == "pubtype") {
      // Set hash URL to current filter.
      let url = $(this).val();
      if (url.substr(0, 9) == '.pubtype-') {
        window.location.hash = url.substr(9);
      } else {
        window.location.hash = '';
      }
    }
  });

  // Filter publications according to hash in URL.
  function filter_publications() {
    let urlHash = window.location.hash.replace('#','');
    let filterValue = '*';

    // Check if hash is numeric.
    if (urlHash != '' && !isNaN(urlHash)) {
      filterValue = '.pubtype-' + urlHash;
    }

    // Set filter.
    let filterGroup = 'pubtype';
    pubFilters[ filterGroup ] = filterValue;
    let filterValues = concatValues( pubFilters );

    // Activate filters.
    $grid_pubs.isotope({ filter: filterValues });

    // Set selected option.
    $('.pubtype-select').val(filterValue);
  }

  /* ---------------------------------------------------------------------------
  * Google Maps or OpenStreetMap via Leaflet.
  * --------------------------------------------------------------------------- */

  function initMap () {
    if ($('#map').length) {
      let map_provider = $('#map-provider').val();
      let lat = $('#map-lat').val();
      let lng = $('#map-lng').val();
      let zoom = parseInt($('#map-zoom').val());
      let address = $('#map-dir').val();
      let api_key = $('#map-api-key').val();
      
      if ( map_provider == 1 ) {
        let map = new GMaps({
          div: '#map',
          lat: lat,
          lng: lng,
          zoom: zoom,
          zoomControl: true,
          zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
          },
          panControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          overviewMapControl: false,
          scrollwheel: true,
          draggable: true
        });

        map.addMarker({
          lat: lat,
          lng: lng,
          click: function (e) {
            let url = 'https://www.google.com/maps/place/' + encodeURIComponent(address) + '/@' + lat + ',' + lng +'/';
            window.open(url, '_blank')
          },
          title: address
        })
      } else {
          let map = new L.map('map').setView([lat, lng], zoom);
          if ( map_provider == 3 && api_key.length ) {
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18,
              id: 'mapbox.streets',
              accessToken: api_key
            }).addTo(map);
          } else {
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
          }
          let marker = L.marker([lat, lng]).addTo(map);
          let url = lat + ',' + lng +'#map='+ zoom +'/'+ lat +'/'+ lng +'&layers=N';
          marker.bindPopup(address + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route='+ url +'">Routing via OpenStreetMap</a></p>');
      }
    }
  }

  /* ---------------------------------------------------------------------------
   * On window load.
   * --------------------------------------------------------------------------- */

  $(window).on('load', function() {
    // Filter projects.
    $('.projects-container').each(function(index, container) {
      let $container = $(container);
      let $section = $container.closest('section');
      let layout = 'masonry';
      if ($section.find('.isotope').hasClass('js-layout-row')) {
        layout = 'fitRows';
      }

      $container.imagesLoaded(function() {
        // Initialize Isotope after all images have loaded.
        $container.isotope({
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: $section.find('.default-project-filter').text()
        });
        // Filter items when filter link is clicked.
        $section.find('.project-filters a').click(function() {
          let selector = $(this).attr('data-filter');
          $container.isotope({filter: selector});
          $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
          return false;
        });
      });
    });

    // Enable publication filter for publication index page.
    if ($('.pub-filters-select')) {
      filter_publications();
      // Useful for changing hash manually (e.g. in development):
      // window.addEventListener('hashchange', filter_publications, false);
    }

    // Initialise Google Maps if necessary.
    initMap();
  });

})(jQuery);
