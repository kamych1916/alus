<template>
  <div class="wrapper">
    <div v-if="response">
      <header class="header section">
        <div class="header-wrapper">
          <div class="header-img">
            <img src="/logo.svg" alt="" />
          </div>
          <p>{{ response.date }}</p>
        </div>
      </header>
      <div class="main">
        <img src="/light.svg" class="main-light" />
        <img src="/light-mobile.svg" class="main-light--mobile" />
        <h1>Hi, {{ response.name }}!</h1>
        <h2>Here’s an overview of your LinkedIn growth this month</h2>

        <div class="main-sections">
          <div class="main-box">
            <div class="main-header">Personal profile</div>
            <div class="main-block__wrapper">
              <div class="main-block">
                <div class="main-block__top">
                  <p>Added friends:</p>
                  <span>{{
                    response.personal_profile.add_friends.percent
                  }}</span>
                </div>
                <div class="main-block__bottom">
                  <p>{{ response.personal_profile.add_friends.total }}</p>
                  <span
                    >Previous result:
                    {{ response.personal_profile.add_friends.previous }}
                  </span>
                </div>
              </div>
              <div class="main-block">
                <div class="main-block__top">
                  <p>New followers:</p>
                  <span>{{
                    response.personal_profile.new_followers.percent
                  }}</span>
                </div>
                <div class="main-block__bottom">
                  <p>{{ response.personal_profile.new_followers.total }}</p>
                  <span
                    >Previous result:
                    {{ response.personal_profile.new_followers.previous }}
                  </span>
                </div>
              </div>
              <div class="main-block">
                <div class="main-block__top">
                  <p>Profile views:</p>
                  <span>{{
                    response.personal_profile.profile_views.percent
                  }}</span>
                </div>
                <div class="main-block__bottom">
                  <p>{{ response.personal_profile.profile_views.total }}</p>
                  <span
                    >Previous result:
                    {{ response.personal_profile.profile_views.previous }}
                  </span>
                </div>
              </div>
              <div class="main-block">
                <div class="main-block__top">
                  <p>Engaging with posts:</p>
                  <span>
                    {{ response.personal_profile.engaging_with_posts.percent }}
                  </span>
                </div>
                <div class="main-block__bottom">
                  <p>
                    {{ response.personal_profile.engaging_with_posts.total }}
                  </p>
                  <span>
                    Previous result:
                    {{ response.personal_profile.engaging_with_posts.previous }}
                  </span>
                </div>
              </div>
              <div class="main-block">
                <div class="main-block__top">
                  <p>Search appearances:</p>
                  <span>
                    {{ response.personal_profile.search_appearances.percent }}
                  </span>
                </div>
                <div class="main-block__bottom">
                  <p>
                    {{ response.personal_profile.search_appearances.total }}
                  </p>
                  <span>
                    Previous result:
                    {{ response.personal_profile.search_appearances.previous }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="main-box">
            <div class="main-header main-header--result">Campaign results</div>
            <div class="main-compaign">
              <div
                class="main-citem"
                v-for="(item, id) in response.campaign_results"
                :key="id"
              >
                <div class="main-citem__header">Campaign №{{ id + 1 }}</div>
                <div class="main-citem__top">
                  <p>{{ item.title }}</p>
                  <span>{{ item.date }}</span>
                </div>
                <div class="main-citem__bottom">
                  <div>
                    <p>Sent:</p>
                    <span>{{ item.sent }} </span>
                  </div>
                  <div class="main-citem__bottom--border">
                    <div class="main-citem__bottom--flex">
                      <div>Accepted:</div>
                      <p>{{ item.accepted.percent }}</p>
                    </div>
                    <span>{{ item.accepted.total }} </span>
                  </div>
                  <div>
                    <div class="main-citem__bottom--flex">
                      <div>Replied:</div>
                      <p>{{ item.replied.percent }}</p>
                    </div>
                    <span>{{ item.replied.total }}</span>
                  </div>
                </div>
              </div>

              <!-- <div class="main-citem">
              <div class="main-citem__header">Campaign №2</div>
              <div class="main-citem__top">
                <p>Dubai Corp HR</p>
                <span>23.03 - 02.04</span>
              </div>
              <div class="main-citem__bottom">
                <div>
                  <p>Sent:</p>
                  <span>290 </span>
                </div>
                <div class="main-citem__bottom--border">
                  <div class="main-citem__bottom--flex">
                    <div>Accepted:</div>
                    <p>20%</p>
                  </div>
                  <span>58 </span>
                </div>
                <div>
                  <div class="main-citem__bottom--flex">
                    <div>Replied::</div>
                    <p>3.1%</p>
                  </div>
                  <span>9 </span>
                </div>
              </div>
            </div>
            <div class="main-citem">
              <div class="main-citem__header">Campaign №3</div>
              <div class="main-citem__top">
                <p>Dubai Top-managers</p>
                <span>23.03 - 02.04</span>
              </div>
              <div class="main-citem__bottom">
                <div>
                  <p>Sent:</p>
                  <span>6 </span>
                </div>
                <div class="main-citem__bottom--border">
                  <div class="main-citem__bottom--flex">
                    <div>Accepted:</div>
                    <p>50%</p>
                  </div>
                  <span>3 </span>
                </div>
                <div>
                  <div class="main-citem__bottom--flex">
                    <div>Replied::</div>
                    <p>0%</p>
                  </div>
                  <span>0 </span>
                </div>
              </div>
            </div> -->
            </div>
          </div>

          <div class="main-box">
            <div class="main-header">Company profile</div>
            <div class="main-company">
              <div class="main-company__wrapper">
                <div class="main-block">
                  <div class="main-block__top">
                    <p>New followers:</p>
                    <span>
                      {{ response.company_profile.new_followers.percent }}
                    </span>
                  </div>
                  <div class="main-block__bottom">
                    <p>{{ response.company_profile.new_followers.total }}</p>
                    <span>
                      Previous result:
                      {{
                        response.company_profile.new_followers.previous_result
                      }}
                    </span>
                  </div>
                </div>
                <div class="main-block">
                  <div class="main-block__top">
                    <p>Unique visitors:</p>
                    <span>
                      {{ response.company_profile.unique_visitors.percent }}
                    </span>
                  </div>
                  <div class="main-block__bottom">
                    <p>
                      {{ response.company_profile.unique_visitors.total }}
                    </p>
                    <span>
                      Previous result:
                      {{
                        response.company_profile.unique_visitors.previous_result
                      }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="main-company__wrapper">
                <div class="main-block">
                  <div class="main-block__top">
                    <p>Search appearances:</p>
                    <span>
                      {{ response.company_profile.search_appearances.percent }}
                    </span>
                  </div>
                  <div class="main-block__bottom">
                    <p>
                      {{ response.company_profile.search_appearances.total }}
                    </p>
                    <span>
                      Previous result:
                      {{
                        response.company_profile.search_appearances
                          .previous_result
                      }}
                    </span>
                  </div>
                </div>
                <div class="main-block">
                  <div class="main-block__top">
                    <p>Post impressions:</p>
                    <span>
                      {{ response.company_profile.post_impressions.percent }}
                    </span>
                  </div>
                  <div class="main-block__bottom">
                    <p>
                      {{ response.company_profile.post_impressions.total }}
                    </p>
                    <span>
                      Previous result:
                      {{
                        response.company_profile.post_impressions
                          .previous_result
                      }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="main-company__wrapper">
                <div class="main-block">
                  <div class="main-block__top">
                    <p>Custom button clicks:</p>
                    <span>
                      {{
                        response.company_profile.custom_button_clicks.percent
                      }}
                    </span>
                  </div>
                  <div class="main-block__bottom">
                    <p>
                      {{ response.company_profile.custom_button_clicks.total }}
                    </p>
                    <span>
                      Previous result:
                      {{
                        response.company_profile.custom_button_clicks
                          .previous_result
                      }}
                    </span>
                  </div>
                </div>

                <div class="main-block">
                  <div class="main-block__top">
                    <p>New leads:</p>
                    <span>
                      {{ response.company_profile.new_leads.percent }}
                    </span>
                  </div>
                  <div class="main-block__bottom">
                    <p>
                      {{ response.company_profile.new_leads.total }}
                    </p>
                    <span>
                      Previous result:
                      {{ response.company_profile.new_leads.previous_result }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      style="display: flex; justify-content: center; margin-top: auto"
    >
      <img src="/loading-2.svg" />
    </div>
    <Footer />
  </div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  async asyncData({ route, $axios }) {
    try {
      const response = await $axios.$get(
        `http://bot.midera.fun:8000/report?name=${route.query.name}`
      );
      return { response };
    } catch (error) {
      return { response: false };
    }
  },
  data() {
    return {
      horizontal: false,
      plugins: [],
      options: {
        horizontal: false,
        align: "prev",
      },
    };
  },

  mounted() {
    if (this.response) {
      document.querySelector("html").style.height = "auto";
      document.querySelector("body").style.height = "auto";
    } else {
      document.querySelector("body").style.height = "100%";
      document.querySelector("html").style.height = "100%";
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  border-bottom: 1px solid #ffffff;
  margin-top: 30px;
  @include less-than(laptop) {
    margin-top: 0px;
    padding: 20px 0;
    border: 0;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include less-than(laptop) {
      flex-direction: column;
    }
  }
  &-img {
    @include less-than(laptop) {
      width: 100%;
      border-bottom: 1px solid #ffffff;
      display: flex;
      justify-content: center;
      padding-bottom: 14px;
    }
  }
  img {
    @include less-than(laptop) {
      width: 80px;
    }
  }
  p {
    font-size: 20px;
    line-height: 109.2%;
    letter-spacing: -0.02em;
    color: #ffffff;
    @include less-than(laptop) {
      font-size: 12px;
      padding-top: 14px;
    }
  }
}
.main {
  padding: 30px 0;
  margin-top: auto;

  @include less-than(laptop) {
    margin-top: 0px;
    padding-top: 0;
  }
  &-light,
  &-light--mobile {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    @include less-than(laptop) {
      display: none;
    }
  }
  &-light--mobile {
    display: none;
    @include less-than(laptop) {
      display: block;
      width: 100%;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 109.2%;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-bottom: 28px;
    @include less-than(laptop) {
      margin-bottom: 14px;
      font-size: 26px;
      text-align: center;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 109.2%;
    letter-spacing: -0.02em;
    color: #ffffff;
    @include less-than(laptop) {
      padding: 0 50px;
      font-size: 14px;
      text-align: center;
    }
  }

  &-sections {
    display: grid;
    grid-template-columns: 1fr 2.5fr 2fr;
    grid-gap: 22px;
    margin-top: 50px;
    @include less-than(laptop) {
      margin-top: 20px;
      display: block;
    }
  }
  &-box {
    width: 100%;
    @include less-than(laptop) {
      margin-bottom: 20px;
      overflow: auto;
      white-space: nowrap;
    }
  }

  &-header {
    background: $lime;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    color: #404040;
    text-align: center;
    padding: 5px;
    font-size: 16px;
    margin-bottom: 30px;
    p {
      color: #404040;
    }
  }

  &-header--result {
    background: #d9d9d9;
  }

  &-block__wrapper {
    @include less-than(laptop) {
      overflow: auto;
      white-space: nowrap;
      display: flex;
      padding-bottom: 14px;
    }
  }
  &-block {
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 14px;
    margin: 5px 0;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: " ";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 11px;
      background: linear-gradient(
        111.48deg,
        rgba(255, 255, 255, 0.5) -23.59%,
        rgba(255, 255, 255, 0) 100.16%
      );
    }
    @include less-than(laptop) {
      // min-width: 350px;
      margin-right: 10px !important;
      &:nth-last-child(1) {
        margin-right: 0px !important;
      }
    }
  }
  &-block__top,
  &-block__bottom {
    display: flex;
    justify-content: space-between;
  }
  &-block__top {
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
    padding-bottom: 5px;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 109.2%;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 109.2%;
      text-align: right;
      letter-spacing: -0.02em;
      color: $lime;
    }
  }
  &-block__bottom {
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 53px;
      line-height: 109.2%;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 109.2%;
      display: flex;
      align-items: flex-end;
      text-align: right;
      letter-spacing: -0.02em;
      color: rgba(255, 255, 255, 0.56);
    }
  }

  &-company {
    @include less-than(laptop) {
      overflow: auto;
      white-space: nowrap;
      display: flex;
      padding-bottom: 10px;
    }
  }
  &-company__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @include less-than(laptop) {
      margin-right: 10px;
      &:nth-last-child(1) {
        margin-right: 0px;
      }
    }
    .main-block {
      margin: 0 2.5px;
      margin-top: 0px;
      margin-bottom: 5px;
    }
  }

  &-compaign {
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 10px 16px;
    box-sizing: border-box;
    position: relative;
    max-height: 100%;
    overflow: auto;
    &::after {
      content: " ";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 11px;
      background: linear-gradient(
        111.48deg,
        rgba(255, 255, 255, 0.5) -23.59%,
        rgba(168, 168, 168, 0) 104.16%
      );
    }
    @include less-than(laptop) {
      border: none;
      padding: 0;
      border-radius: 0;
      display: flex;
      overflow: auto;
      white-space: nowrap;
      padding-bottom: 14px;
      &::after {
        background: none;
      }
    }
  }
  &-citem {
    border-bottom: 1px solid $lime;
    padding: 16px 0;
    position: relative;
    &:nth-last-child(1) {
      border-bottom: none;
      padding-bottom: 0px;
    }
    @include less-than(laptop) {
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 10px 16px;
      margin-right: 10px !important;
      min-width: 400px;
      &::after {
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 11px;
        background: linear-gradient(
          111.48deg,
          rgba(255, 255, 255, 0.5) -23.59%,
          rgba(168, 168, 168, 0) 104.16%
        );
      }
      &:nth-last-child(1) {
        margin-right: 0px !important;
      }
    }
  }
  &-citem__header {
    color: $lime;
    margin-bottom: 10px;
    @include less-than(laptop) {
      margin-bottom: 5px;
    }
  }
  &-citem__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    @include less-than(laptop) {
      border-bottom: 1px solid #fff;
      padding-bottom: 5px;
    }
    p {
      font-size: 20px;
      line-height: 125.7%;
      letter-spacing: -0.02em;
      color: #ffffff;
      @include less-than(laptop) {
        font-size: 18px;
      }
    }
  }
  &-citem__bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    span {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 44px;
      line-height: 109.2%;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
  }
  &-citem__bottom--flex {
    display: flex;
    justify-content: space-between;
    p {
      color: $lime;
    }
  }
  &-citem__bottom--border {
    border-left: 1px solid #7c868d;
    border-right: 1px solid #7c868d;
    padding: 0 10px;
  }
}
</style>
