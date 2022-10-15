var settings = {
  url: 'https://api.sportsdata.io/v3/soccer/scores/json/CompetitionDetails/EPL?key=18767a225a28469294f60462b4705bf0',
  method: 'GET',
  timeout: 0,
};

$.ajax(settings).done(function (response) {
  // let season = ;
  $('.season').text(response.CurrentSeason.Name);

  let teams = response.Teams;
  $.each(teams, function (i, data) {
    $('.listTeams').append(`
            <div class="col-sm-6 mb-4">
              <div class="card h-100">
                <div class="d-flex flex-wrap">
                  <div class="col-sm-2">
                    <img src="${data.WikipediaLogoUrl}" alt="${data.name}" class="img-fluid">
                  </div>
                  <div class="col-sm-10 ps-3">
                    <h6 role="button" data-id="${data.TeamId}" class="btn-modal stretched-link">${data.Name}</h6>
                    <p class="m-0">ID : ${data.TeamId}</p>
                    <p class="m-0">Berdiri Tahun : ${data.Founded}</p>
                  </div>
                </div>
              </div>
            </div>
            `);
  });
});

$('.row').on('click', '.btn-modal', function () {
  // localStorage.setItem('id', $(this).data('id'));
  window.location.href = 'detail.html?id=' + $(this).data('id') + '';
  // console.log($(this).data('id'));
  var template = '';
  // $.ajax({
  //   // url: 'https://api.sportsdata.io/v3/soccer/scores/json/PlayersByTeam/' + $(this).data('id') + '',
  //   url: 'https://api.sportsdata.io/v3/soccer/scores/json/MembershipsByTeam/' + $(this).data('id') + '',
  //   type: 'get',
  //   dataType: 'json',
  //   data: {
  //     key: '18767a225a28469294f60462b4705bf0',
  //   },
  //   success: function (result) {
  //     window.location.href = 'detail.html/' + $(this).data('id') + '';
  //     // let teams = result;
  //     // console.log(result);
  //     // $.each(result, function (i, data) {
  //     //   template += `
  //     //   <div class="col-sm-6 mb-4">
  //     //     <div class="d-flex flex-wrap">
  //     //       <div class="col-sm-2">
  //     //         <img src="${data.PhotoUrl}" alt="${data.strTeam}" class="img-fluid">
  //     //       </div>
  //     //       <div class="col-sm-10 ps-3">
  //     //         <h6>${data.ShortName}</h6>
  //     //       </div>
  //     //     </div>
  //     //   </div>
  //     //   `;
  //     // });

  //     // $('.modal-row').html(template);
  //     // console.log(result);
  //   },
  // });
});

$('.modal-row').on('click', '.remove_project_file', function (e) {
  e.preventDefault();

  $(this).parent().remove();
});
