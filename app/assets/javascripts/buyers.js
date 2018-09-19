$(document).ready(function () {
  $("#search-input").keyup(function () {
    // work around to get case insensitive :contains
    $.expr[":"].contains = $.expr.createPseudo(function (arg) {
      return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
      };
    });
    let searchUserValue = $(this).val();
    let userRow = $(".user");
    let findUser = $(".user:contains('" + searchUserValue + "')").show();
    console.log(findUser);
    userRow.not(findUser).hide();
  });
  $("#select-age").change(function () {
    let optionValue = $(this).val();
    let userRow = $(".user");
    let range = ageRange(optionValue);
    let findUser = filterUsersBetween(userRow, range).show();
    userRow.not(findUser).hide();
  });
});

function filterUsersBetween(userRow, range) {
  return userRow.filter(function () {
    if ($(this).find('.age').text() >= range[0] && $(this).find('.age').text() <= range[1]) {
      return userRow;
    }
  });
}

function ageRange(optionValue) {
  switch (optionValue) {
    case '10':
      return [18, 60];
    case '11':
      return [18, 25];
    case '12':
      return [26, 35];
    case '13':
      return [36, 50];
    case '14':
      return [51, 60];
  }
}
