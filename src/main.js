// template http://codepen.io/ademilter/pen/EVmxXG/
var UserCard = multiline(function() {
  /*
  <div class="UserCard">

      <div class="UserCardProfile">
        <img class="UserCardProfile_photo" src="{{user.avatar_url}}&s=150" alt="" />
        <a class="UserCardProfile_name" href="{{user.html_url}}">
          <strong>{{user.name}}</strong>
        </a>
        <p class="UserCardProfile_username">{{user.login}}</p>
      </div>
      <!-- /UserCardProfile -->

      <div class="UserCardDetail">

        <ul class="UserCardInfo">
          <li>
            <span class="octicon octicon-organization"></span> {{user.type}}
          </li>
          <li>
            <span class="octicon octicon-location"></span> {{user.location}}
          </li>
          <li>
            <span class="octicon octicon-mail"></span> <a href="mailto:{{user.email}}">{{user.email}}</a>
          </li>
          <li>
            <span class="octicon octicon-link"></span> <a href="{{user.blog}}">{{user.blog}}</a>
          </li>
          <li>
            <span class="octicon octicon-clock"></span> Joined on {{user.created_at}}
          </li>
        </ul>
        <!-- /UserCardInfo -->

        <ul class="UserCardStats">
          <li class="UserCardStats_frame">
            <h5 class="UserCardStats_count">
              <a href="">{{user.followers}}</a>
            </h5>
            <p class="UserCardStats_title">
              <small>Followers</small>
            </p>
          </li>
          
          <li class="UserCardStats_frame">
            <h5 class="UserCardStats_count">
              <a href="">{{user.following}}</a>
            </h5>
            <p class="UserCardStats_title">
              <small>Following</small>
            </p>
          </li>
          <li class="UserCardStats_frame">
            <h5 class="UserCardStats_count">
              <a href="">{{user.public_repos}}</a>
            </h5>
            <p class="UserCardStats_title">
              <small>Repos</small>
            </p>
          </li>
        </ul>
      <!-- /UserCardStats -->
      <ul class="UserCardOrganize">
          {{#each orgs}}
            <li>
              <a href="https://github.com/{{login}}">
                <img src="{{avatar_url}}&s=150" alt="" />
              </a>
            </li>
          {{/each}}

      </ul>
      <!-- /UserCardOrganize -->

      </div>
    <!-- /UserCardDetail -->

  </div>
    */
});

var whatTheClass = ".author-name a," + // repo-detail/
  ".entry-title a"
  ".member-name," + // github-page/
  ".member-username," + // orgs/github-page/
  ".alert .title > a:first-child," + // /(dashboard)
  ".issue-meta-section a," + // issues/
  ".timeline-comment-header-text .author," + // issues/detail
  ".gh-header-meta .author"; // issues/detail

var hide = function() {
  $('.UserCard').remove();
  clearTimeout(timer);
};

$(document).on('click', function(e) {
  hide();
});
$(document).on('click', '.UserCard', function(e) {
  e.stopPropagation();
});
$(document).on('mouseleave', '.UserCard', function(e) {
  hide();
});

var dataObj = {};

var getUserInfo = function(path, prefix, callback) {
  var template = UserCard;
  $.get("https://api.github.com/users" + path, function(data) {
    dataObj[prefix] = data;
    var compiled = Handlebars.compile(template);
    template = compiled(dataObj);
    callback(template);
  });
};

var addCard = function (element) {
  var thisPosition = this.offset();
  var thisHeight = this.height();
  var arrowHeight = 10;

  timer = setTimeout(function() {
    var $card = $(".UserCard");
    $card.length>0 ? $card.replaceWith( element ) : $('body').append(element);
    $(".UserCard").css({
      "position": "absolute",
      "left":     thisPosition.left,
      "top":      thisPosition.top + thisHeight + arrowHeight
    });
  }, 300);
}
$(document).on('mouseenter', whatTheClass, function(e) {
  var $this = $(this);
  var href= $this.attr("href");
  getUserInfo( href, "user", addCard.bind($this) );
  getUserInfo( href + "/orgs", "orgs", addCard.bind($this) );

});

