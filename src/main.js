// template http://codepen.io/ademilter/pen/EVmxXG/
var UserCard = multiline(function () {
  /*
  <div class="UserCard">

    <div class="UserCardProfile">
      <img class="UserCardProfile_photo" src="https://avatars0.githubusercontent.com/u/187922?v=3&s=150" alt="" />
      <a class="UserCardProfile_name" href="">
        <strong>Adem ilter</strong>
      </a>
      <p class="UserCardProfile_username">ademilter</p>
    </div>
    <!-- /UserCardProfile -->

    <div class="UserCardDetail">

      <ul class="UserCardInfo">
        <li>
          <span class="octicon octicon-organization"></span> interacthings
        </li>
        <li>
          <span class="octicon octicon-location"></span> İstanbul
        </li>
        <li>
          <span class="octicon octicon-mail"></span> <a href="">ademilter@gmail.com</a>
        </li>
        <li>
          <span class="octicon octicon-link"></span> <a href="">http://ademilter.com</a>
        </li>
        <li>
          <span class="octicon octicon-clock"></span> Joined on Jan 22, 2010
        </li>
      </ul>
      <!-- /UserCardInfo -->

      <ul class="UserCardStats">
        <li class="UserCardStats_frame">
          <h5 class="UserCardStats_count">
            <a href="">127</a>
          </h5>
          <p class="UserCardStats_title">
            <small>Followers</small>
          </p>
        </li>
        <li class="UserCardStats_frame">
          <h5 class="UserCardStats_count">
            <a href="">42</a>
          </h5>
          <p class="UserCardStats_title">
            <small>Starred</small>
          </p>
        </li>
        <li class="UserCardStats_frame">
          <h5 class="UserCardStats_count">
            <a href="">53</a>
          </h5>
          <p class="UserCardStats_title">
            <small>Following</small>
          </p>
        </li>
      </ul>
      <!-- /UserCardStats -->

      <ul class="UserCardOrganize">
        <li>
          <a href="">
            <img src="https://avatars1.githubusercontent.com/u/3379559?v=3&s=150" alt="" />
          </a>
        </li>
      </ul>
      <!-- /UserCardOrganize -->

    </div>
    <!-- /UserCardDetail -->

  </div>
    */
});

var whatTheClass = ".author, .user-mention";

var hide = function () {
  $('.UserCard').remove();
  clearTimeout(timer);
};

$(document).on('click', function (e) {
  hide();
});

$(document).on('click', '.UserCard', function (e) {
  e.stopPropagation();
});

$(document).on('mouseenter', whatTheClass, function (e) {
  var thisPosition = $(this).offset();
  var thisHeight = $(this).height();
  var arrowHeight = 10;

  timer = setTimeout(function () {
    $('body').append(UserCard);
    $('.UserCard').css({
      "position": "absolute",
      "left": thisPosition.left,
      "top": thisPosition.top + thisHeight + arrowHeight
    });
  }, 300);
});

$(document).on('mouseleave', '.UserCard', function (e) {
  hide();
});
