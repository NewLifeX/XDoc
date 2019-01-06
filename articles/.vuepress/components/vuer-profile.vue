<template>
  <div class="vuer">
    <div class="avatar">
      <img
        v-if="profile.github"
        :src="'https://github.com/' + profile.github + '.png'"
        :alt="profile.name"
        width=80
        height=80
      >
    </div>
    <div class="profile">
      <h3 :data-official-title="profile.title">
        {{ profile.name }}
        <sup
          v-if="profile.title && titleVisible"
          v-html="profile.title"
        ></sup>
      </h3>
      <dl>
        <template v-if="profile.reposOfficial">
          <dt>Core focus</dt>
          <dd>
            <ul>
              <li v-for="repo in profile.reposOfficial">
                <a
                  :href="githubUrl('vuejs', repo)"
                  target=_blank
                >{{ repo.name || repo }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <template v-if="profile.github && profile.reposPersonal">
          <dt>Ecosystem</dt>
          <dd>
            <ul>
              <li v-for="repo in profile.reposPersonal">
                <a
                  :href="githubUrl(profile.github, repo)"
                  target=_blank
                >{{ repo.name || repo }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <template v-if="profile.work">
          <dt>
            <i class="fa fa-briefcase"></i>
            <span class="sr-only">Work</span>
          </dt>
          <dd v-html="workHtml"></dd>
        </template>
        <span
          v-if="profile.distanceInKm"
          class="distance"
        >
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">Distance</span>
          </dt>
          <dd>
            About
            <span
              v-if="profile.distanceInKm <= 150"
              :title="profile.name + ' is close enough to commute to your location.'"
              class="user-match"
            >{{ textDistance }} away</span>
            <template v-else>{{ textDistance }} away</template>
            in {{ profile.city }}
          </dd>
        </span>
        <template v-else-if="profile.city">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">City</span>
          </dt>
          <dd>
            {{ profile.city }}
          </dd>
        </template>
        <template v-if="profile.languages">
          <dt>
            <i class="fa fa-globe"></i>
            <span class="sr-only">Languages</span>
          </dt>
          <dd
            v-html="languageListHtml"
            class="language-list"
          ></dd>
        </template>
        <template v-if="profile.links">
          <dt>
            <i class="fa fa-link"></i>
            <span class="sr-only">Links</span>
          </dt>
          <dd>
            <ul>
              <li v-for="link in profile.links">
                <a
                  :href="link"
                  target=_blank
                >{{ minimizeLink(link) }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <footer
          v-if="hasSocialLinks"
          class="social"
        >
          <a
            class=github
            v-if="profile.github"
            :href="githubUrl(profile.github)"
            target=_blank
          >
            <i class="fa fa-github"></i>
            <span class="sr-only">Github</span>
          </a>
          <a
            class=twitter
            v-if="profile.twitter"
            :href="'https://twitter.com/' + profile.twitter"
          >
            <i class="fa fa-twitter"></i>
            <span class="sr-only">Twitter</span>
          </a>
          <a
            class=codepen
            v-if="profile.codepen"
            :href="'https://codepen.io/' + profile.codepen"
          >
            <i class="fa fa-codepen"></i>
            <span class="sr-only">CodePen</span>
          </a>
        </footer>
      </dl>
    </div>
  </div>
</template>

<script>
import languageNameFor from '../public/data/languageNameFor.js'
export default {
  props: {
    profile: Object,
    titleVisible: Boolean
  },
  computed: {
    workHtml: function() {
      var work = this.profile.work;
      var html = "";
      if (work.orgUrl) {
        html +=
          '<a href="' +
          work.orgUrl +
          '" target="_blank" rel="noopener noreferrer">';
        if (work.org) {
          html += work.org;
        } else {
          this.minimizeLink(work.orgUrl);
        }
        html += "</a>";
      } else if (work.org) {
        html += work.org;
      }
      if (work.role) {
        if (html.length > 0) {
          html = work.role + " @ " + html;
        } else {
          html = work.role;
        }
      }
      return html;
    },
    textDistance: function() {
      var distanceInKm = this.profile.distanceInKm || 0;
      if (this.$root.useMiles) {
        return roundDistance(kmToMi(distanceInKm)) + " miles";
      } else {
        return roundDistance(distanceInKm) + " km";
      }
    },
    languageListHtml: function() {
      var vm = this;
      var nav = window.navigator;
      if (!vm.profile.languages) return "";
      var preferredLanguageCode = nav.languages
        ? // The preferred language set in the browser
          nav.languages[0]
        : // The system language in IE
          nav.userLanguage ||
          // The language in the current page
          nav.language;
      return (
        "<ul><li>" +
        vm.profile.languages
          .map(function(languageCode, index) {
            var language = languageNameFor[languageCode];
            if (
              languageCode !== "en" &&
              preferredLanguageCode &&
              languageCode === preferredLanguageCode.slice(0, 2)
            ) {
              return (
                "<span " +
                'class="user-match" ' +
                'title="' +
                vm.profile.name +
                " can give technical talks in your preferred language." +
                '"' +
                ">" +
                language +
                "</span>"
              );
            }
            return language;
          })
          .join("</li><li>") +
        "</li></ul>"
      );
    },
    hasSocialLinks: function() {
      return (
        this.profile.github || this.profile.twitter || this.profile.codepen
      );
    }
  },
  methods: {
    minimizeLink: function(link) {
      return link
        .replace(/^https?:\/\/(www\.)?/, "")
        .replace(/\/$/, "")
        .replace(/^mailto:/, "");
    },
    /**
     * Generate a GitHub URL using a repo and a handle.
     */
    githubUrl: function(handle, repo) {
      if (repo && repo.url) {
        return repo.url;
      }
      if (repo && repo.indexOf("/") !== -1) {
        // If the repo name has a slash, it must be an organization repo.
        // In such a case, we discard the (personal) handle.
        return "https://github.com/" + repo.replace(/\/\*$/, "");
      }
      return "https://github.com/" + handle + "/" + (repo || "");
    }
  }
};
</script>