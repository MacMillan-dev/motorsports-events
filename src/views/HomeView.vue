<template>
  <div class="home-content">
    <h1>Welcome to Car events Kenya.</h1>
    <p>
      Stay up to date with motorsport events happening around the car
      enthusiasts scene in the country.
    </p>
  </div>
  <DatePicker
    class="datePicker"
    v-model="date"
    :value="null"
    color="green"
    is-light
  />
  <div v-for="e in events" :key="e.id">
    <p>{{e.eventDate}}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DatePicker } from "v-calendar";
import { useDatabaseStore } from "@/store/useDatabase";
import { db } from "@/firebase";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";

const store = useDatabaseStore()
let date = new Date()
let events = ref([])

onMounted(function () {
  //This fires every time there is an event added to the database
  onSnapshot(collection(db, "Events"), (QuerySnapshot) => {
    let eventDetails = []
    QuerySnapshot.forEach((doc) => {
    const event = {
      id: doc.id,
      eventName: doc.data().eventName,
      eventDate: doc.data().eventDate,
      eventLocation: doc.data().eventLocation,
      eventOrganizer: doc.data().eventOrganizer,
      eventTime: doc.data().eventTime,
    }
    eventDetails.push(event);
  })
  events.value = eventDetails;
})
})
console.log(events.value)
</script>


<style scoped>
.home-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.home-content h1 {
  font-size: 40px;
}
.home-content p {
  margin-bottom: 5em;
}
.datePicker {
  margin-right: auto;
  display: flex;
  margin-left: 70px;
  top:0;
}
</style>
































// export default{
  //   data(){
  //     return{
  //       store: useDatabaseStore(),
  //       date: new Date(),
  //       events: []
  //     }
  //   },
  //   mounted(
  //     function getDbData() {
  //   //This fires every time there is an event added to the database
  //   onSnapshot(collection(db, "Events"), (QuerySnapshot) => {
  //     let eventDetails = []
  //     QuerySnapshot.forEach((doc) => {
  //     const event = {
  //       id: doc.id,
  //       eventName: doc.data().eventName,
  //       eventDate: doc.data().eventDate,
  //       eventLocation: doc.data().eventLocation,
  //       eventOrganizer: doc.data().eventOrganizer,
  //       eventTime: doc.data().eventTime,
  //     }
  //     eventDetails.push(event);
  //   })
  //   this.events = eventDetails;
  // })
  // }
  //   )
  // }