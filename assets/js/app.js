/*(function($) {

 function init() {
    $sidebarStyles = $('.sidebar').attr('style') || "";
    $sidebarStyles += ' min-height: ' + $(document).height() + 'px;';
    $('.sidebar').attr('style', $sidebarStyles);

    function activateTab() {
      if(['/tags.html', '/categories.html'].indexOf(window.location.pathname) > -1) {
        var hash = window.location.hash;
        if(hash)
          $('.tab-pane').length && $('a[href="' + hash + '"]').tab('show');
        else
          $('.tab-pane').length && $($('.cat-tag-menu li a')[0]).tab('show');
      }
    }

    // watch hash change and activate relevant tab
    $(window).on('hashchange', activateTab);

    // initial activation
    activateTab();
  };

  // run init on document ready
  $(document).ready(init);

})(jQuery); */

function toggleNavAction(selector) {
    var $button = document.querySelector(selector);
    var isMenuOpen = false;

    $button.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
        $button.setAttribute('aria-expanded', isMenuOpen);
    });
}

toggleNavAction('NAV BUTTON');
toggleNavAction('#nav-menu BUTTON');