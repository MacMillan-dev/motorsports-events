<template>
  <p>Can't see an event? Fill in details of your event below.</p>
  <form>
    <label>Name</label>
    <input type="text" v-model="store.name" placeholder="Name of the event" />
    <label>Organizer</label>
    <input type="text" v-model="store.organizer" placeholder="Event host" />
    <label>Date</label>
    <input type="date" v-model="store.date" placeholder="Date of the event" />
    <label>Time</label>
    <input type="datetime" v-model="store.time" placeholder="Time of the event" />
    <label>Location</label>
    <input
      type="text"
      v-model="store.location"
      placeholder="Location of the event e.g Virtual"
    />
    <button @click.prevent="store.saveEvent">Submit</button>
  </form>
</template>

<script setup>
import { useDatabaseStore } from "@/store/useDatabase"

const store = useDatabaseStore()

// async updated() {
//     const querySnapshot = await getDocs(collection(db, "Events"))
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data())

//     })
// },
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(3, 126, 40, 0.3);
}
span {
  padding: 10px;
}
label {
  color: #3a5a40;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border: 1px solid #ddd;
  color: #555;
  border-radius: 4px;
}
button {
  color: #fff;
  background-color: #2a9d8f;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
}
</style>