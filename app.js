import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "My_Text-Transform",
      id: crypto.randomUUID(),
      text: `type or paste your content here.`,
      newText: "Text...",
    };
  },
  created() {},
  methods: {
    downloadContent(){
        window.location.href = 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(this.newText)
    },
    copyClip() {
      const copyText = document.getElementById("newText");   
      copyText.select();
      31031520
      copyText.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(copyText.value);
    },
    upperCase() {
      this.newText = this.text.toUpperCase();
    },
    lowerCase() {
      this.newText = this.text.toLowerCase();
    },
    capitalize() {
      const arr = this.text.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      this.newText = arr.join(" ");
    },
    reversetext() {
      this.newText = this.text.split("").reverse().join("");
    },
    textModiOne() {
      this.newText = this.text.split("").join("-").trim().toLowerCase();
    },
    textModiTwo() {
      this.newText = this.text.split("").join("_").trim().toLowerCase();
    },
    textModiTree() {
      const newText = document.querySelector(".new-text");

      this.newText = `<strike>${this.text}</strike>`;
    },
  },
}).mount("#app");
