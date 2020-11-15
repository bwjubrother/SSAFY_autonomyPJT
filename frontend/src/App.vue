<template>
  <v-app>
    <div class="d-md-none h-100">
      <!-- 내브바 -->
      <v-app-bar app class="align-center" color="black darken-3" dark>
        <div style="height: 40px">
          <!-- 내브바 로고 -->

          <img
            v-if="this.isLoggedIn"
            @click="$router.push('/')"
            src="@/assets/images/logos/logo.png"
            alt="match-on-logo"
            style="height: 100%"
            class="ml-1"
          />
        </div>
        <v-spacer></v-spacer>

        <p>ver 11.16.9</p>

        <!-- <v-btn @click="push1">push</v-btn> -->

        <!-- 비로그인 디비전 -->
        <v-dialog v-if="!this.isLoggedIn" v-model="dialog" max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <i v-bind="attrs" v-on="on" class="fas fa-power-off fa-lg"></i>
          </template>
          <v-card style="padding: 20px">
            <v-card-title
              class="headline d-flex justify-center ft-dh"
              style="padding: 0px 0px 20px 0px"
            >
              로그인
            </v-card-title>
            <v-card-actions>
              <v-img
                src="@/assets/images/kakao/kakao_login_large_wide.png"
                @click="kakaologin"
                style="cursor: pointer"
              >
              </v-img>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- 로그인 디비전 -->
        <v-btn
          v-if="this.isLoggedIn && this.awesomeId == 'logoutbutton'"
          color="rgb(189, 22, 44)"
          dark
          @click="logout2"
          :id="awesomeId"
        >
          <span :id="awesomefont1">이</span>
          <span :id="awesomefont2">걸 </span>
          <span :id="awesomefont3">로</span>
          <span :id="awesomefont4">그</span>
          <span :id="awesomefont5">아</span>
          <span :id="awesomefont6">웃</span>
          <span :id="awesomefont7">해</span>
          <span>?</span>
        </v-btn>
      </v-app-bar>

      <v-main class="h-100" style="padding-bottom: 50px">
        <router-view
          @report-detail="getReportDetail"
          :report_detail_datas="report_detail_datas"
          :sports_name="sports_name"
          class="h-100"
        ></router-view>
      </v-main>

      <!-- 바텀 내비게이터 -->
      <v-bottom-navigation
        v-model="value"
        background-color="black"
        fixed="true"
        class="d-flex justify-space-around align-center"
        v-if="this.isLoggedIn"
      >
        <v-btn value="home" to="/" @click="awesomeFunc">
          <!-- <span style="color: white">집</span> -->
          <i class="fas fa-home fa-2x" style="color: white"></i>
        </v-btn>

        <v-btn value="match" to="/match">
          <!-- <span style="color: white">매치</span> -->
          <i class="fas fa-flag-checkered fa-2x" style="color: white"></i>
        </v-btn>

        <v-btn value="schedule" to="/schedule">
          <!-- <span style="color: white">일정</span> -->
          <i class="fa fa-calendar-check fa-2x" style="color: white"></i>
        </v-btn>

        <v-btn value="report" to="/report">
          <!-- <span style="color: white">전적</span> -->
          <i class="far fa-clipboard fa-2x" style="color: white"></i>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <MainSignoutPC class="d-none d-md-block" />
  </v-app>
</template>

<script>
import axios from "axios";
import http from "@/util/http-common";
import { mapGetters, mapState, mapActions } from "vuex";
// import { token } from "@/services/messaging";
import MainSignoutPC from "@/views/MainSignoutPC.vue";
import Home from "@/views/Home.vue";

export default {
  name: "app",
  // setup() {
  //   return {
  //     token,
  //   };
  // },
  components: {
    MainSignoutPC,
    Home,
  },
  data() {
    return {
      dialog: false,
      userProfile: sessionStorage.getItem("userProfile")
        ? JSON.parse(sessionStorage.getItem("userProfile"))
        : [],
      drawer: false,
      group: null,
      token2: "",
      report_detail_datas: [],
      sports_name: "",
      awesomeVar: 0,
      awesomeId: "",
      awesomefont1: "",
      awesomefont2: "",
      awesomefont3: "",
      awesomefont4: "",
      awesomefont5: "",
      awesomefont6: "",
      awesomefont7: "",
    };
  },
  methods: {
    kakaologin() {
      const self = this;
      Kakao.Auth.login({
        success: function (res) {
          const token = res.access_token;
          http
            .post("/auth/kakao", {
              access_token: token,
            })
            .then((res) => {
              console.log("Login Success");
              Kakao.API.request({
                url: "/v2/user/me",
                success: function (res) {
                  console.log(res);
                  var username = res.properties.nickname;
                  username = username.replace(/(\s*)/g, "");
                  var password = res.id;
                  http
                    .post("/login/", {
                      username: username,
                      password: password,
                    })
                    .then((json) => {
                      console.log(json);
                      const data = json.data;
                      self.setToken(data.token);
                      self.setUserProfile(data.user);
                      self.login();
                    })
                    .catch((error) => {
                      console.log(error);
                      window.gapi &&
                        window.gapi.auth2.getAuthInstance().signOut();
                    });
                },
                fail: function (error) {},
              });
            })
            .catch((err) => {
              console.log(err.response);
            });
        },
        fail: function (error) {
          console.log(error);
        },
      });
    },
    login() {
      this.dialog = false;
      const token2 = sessionStorage.getItem("token2");
      this.token2 = token2;
      console.log(token2);
      axios
        .post(
          "https://fcm.googleapis.com/fcm/send",
          {
            to: token2,
            data: { message: "로그인 푸시 알림" },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "key=AAAA5zwJHyg:APA91bGz18YD6un-vpBJDryN8g3PLx7NEbH7ChmnxU4l0TOOx1HKSpNZ7v3td8Fqb67tOHqmXvjnBRCpg_cUYzbGTQs0DZmophlF-gi4hCXMsUBkwQ1LYkE8aPB_eR-R2kQBjZvLmdKU",
              Accept: "application/json",
            },
          }
        )
        .then((data) => {
          console.log("push notification success");
          console.log(data);
        })
        .catch((err) => {
          console.log("push notification fail");
          console.log(err);
        });
      this.$router.go();
    },
    ...mapActions(["logout", "setToken", "setUserProfile"]),
    logout2() {
      if (this.isLoggedIn) {
        this.logout();
        this.$router.push("/");
      }
    },
    push1() {
      const token2 = sessionStorage.getItem("token2");
      this.token2 = token2;
      console.log(token2);
      axios
        .post(
          "https://fcm.googleapis.com/fcm/send",
          {
            to: token2,
            data: { message: "푸시 버튼 알림" },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "key=AAAA5zwJHyg:APA91bGz18YD6un-vpBJDryN8g3PLx7NEbH7ChmnxU4l0TOOx1HKSpNZ7v3td8Fqb67tOHqmXvjnBRCpg_cUYzbGTQs0DZmophlF-gi4hCXMsUBkwQ1LYkE8aPB_eR-R2kQBjZvLmdKU",
              Accept: "application/json",
            },
          }
        )
        .then((data) => {
          console.log("asdf");
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReportDetail(sports_pk) {
      http
        .get(`/match/report/${sports_pk}`, {
          headers: {
            Authorization: "JWT " + this.token,
          },
        })
        .then((res) => {
          this.report_detail_datas = res.data;
          this.sports_name = res.data[0].sports_name;
          console.log(this.report_detail_datas);
          console.log(this.sports_name);
          this.$router.push(`report/${sports_pk}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    awesomeFunc() {
      this.awesomeVar += 1;
      if (this.awesomeVar % 7 === 0) {
        this.awesomeId = "logoutbutton";
        this.awesomefont1 = "buttonFont1";
        this.awesomefont2 = "buttonFont2";
        this.awesomefont3 = "buttonFont3";
        this.awesomefont4 = "buttonFont4";
        this.awesomefont5 = "buttonFont5";
        this.awesomefont6 = "buttonFont6";
        this.awesomefont7 = "buttonFont7";
      } else {
        this.awesomeId = "";
        this.awesomefont1 = "";
        this.awesomefont2 = "";
        this.awesomefont3 = "";
        this.awesomefont4 = "";
        this.awesomefont5 = "";
        this.awesomefont6 = "";
        this.awesomefont7 = "";
      }
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapState(["token"]),
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.h-100 {
  height: 100%;
}
#logoutbutton {
  background: linear-gradient(
    45deg,
    red,
    orange,
    yellow,
    green,
    blue,
    navy,
    purple
  );
}
#buttonFont1 {
  color: red;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#buttonFont2 {
  color: orange;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#buttonFont3 {
  color: yellow;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#buttonFont4 {
  color: green;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#buttonFont5 {
  color: blue;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#buttonFont6 {
  color: navy;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#buttonFont7 {
  color: purple;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
</style>