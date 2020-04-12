import $ from 'jquery';

function initFilters() {
  // no display if filters not available
  if ($('div').is('#filters')) {
    $('#button_filters').show();
    $('.js-filters-action').sideNav({ edge: 'right' });
    $('#clear_form_filters').on('click', () => {
      $('#filters input').val('');
      $('#filters :checked').removeAttr('checked');

      return false;
    });
  }
}

function initExport() {
  // no display if export not available
  if ($('div').is('#export')) {
    $('#button_export').show();
    $('.js-export-action').sideNav({ edge: 'right' });
  }
}

function initRandom() {
  // no display if export (ie: entries) not available
  if ($('div').is('#export')) {
    $('#button_random').show();
  }
}

function initSort() {
  // no display if export (ie: entries) not available
  if ($('div').is('#sort')) {
    $('#button_sort').show();
    $('.js-sort-action').sideNav({ edge: 'right' });
  }
}

export {
  initExport,
  initFilters,
  initRandom,
  initSort,
};
