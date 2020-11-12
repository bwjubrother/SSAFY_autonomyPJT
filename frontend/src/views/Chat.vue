<template>
  <div class="chat">
    <!-- <form onsubmit="sendMessage()">
      <input id="message" placeholder="Enter message" autocomplete="off" />
      <input type="submit" />
    </form> -->
    <div>채팅방입니다.</div>
    <p>{{ username }}</p>
    <div class="text-outer">
      <div
        :class="item.idFrom === currentUserId ? 'textFrom' : 'textTo'"
        class="text-inner"
        v-for="item in listMessage"
        :key="item.id"
      >
        <h6>{{ item.content }}</h6>
      </div>
    </div>
    <input
      type="text"
      style="
        width: 85%;
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 5px 10px;
      "
      class="mr-3"
      v-model="inputValue"
      v-on:keyup.enter="sendMessage(inputValue)"
    />

    <ul id="messages"></ul>
  </div>
</template>

<script>
// import firebase from "../services/firebase";
import { mapState } from "vuex";

export default {
  data() {
    return {
      username: "김주형",
      inputValue: "",
      listMessage: [],
      currentUserName: sessionStorage.getItem("userProfile").username,
      currentUserId: sessionStorage.getItem(userProfile.id),
      groupChatId: null,
    };
  },
  // watch: {
  //   currentPeerUser: function (newVal, oldVal) {
  //     if (newVal !== oldVal) {
  //       this.getMessages();
  //     }
  //   },
  // },
  methods: {
    sendMessage(inputValue) {
      firebase.database().ref("messages").push().set({
        sender: "김주형",
        message: inputValue,
      });

      return false;
    },
    getMessages() {
      firebase
        .database()
        .ref("messages")
        .on("child_added", function (snapshot) {
          var html = "";
          // give each message a unique ID
          html += "<li id='message-" + snapshot.key + "'>";
          // show delete button if message is sent by me
          if (snapshot.val().sender == myName) {
            html +=
              "<button data-id='" +
              snapshot.key +
              "' onclick='deleteMessage(this);'>";
            html += "Delete";
            html += "</button>";
          }
          html += snapshot.val().sender + ": " + snapshot.val().message;
          html += "</li>";

          document.getElementById("messages").innerHTML += html;
        });
    },
  },
  mounted() {
    this.getMessages();
  },
};
</script>

<style>
</style>