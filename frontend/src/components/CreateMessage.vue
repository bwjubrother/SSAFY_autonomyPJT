<template>
  <div class="container" style="margin-bottom: 30px">
    <form class="m-0" @submit.prevent="createMessage">
      <div class="form-group">
        <v-row>
          <v-col class="m-0" cols="9" style="padding: 0px 10px">
            <v-text-field
              name="message"
              class="form-control mb-0"
              type="text"
              label="메세지를 입력하세요"
              solo
              v-model="newMessage"
            ></v-text-field>
          </v-col>
          <v-col class="m-0" cols="3" style="padding: 0px">
            <v-btn
              class="ma-2 btn btn-primary"
              outlined
              color="indigo"
              type="submit"
              name="action"
            >
              전송
            </v-btn>
          </v-col>
        </v-row>
        <p class="text-danger" v-if="errorText">{{ errorText }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import fb from "@/firebase/init";

export default {
  name: "CreateMessage",
  props: ["name", "match_id"],
  data() {
    return {
      newMessage: null,
      errorText: null,
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages" + String(this.match_id))
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "A message must be entered first!";
      }
    },
  },
};
</script>

