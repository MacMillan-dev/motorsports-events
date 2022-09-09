import { createPinia } from "pinia";
import { defineStore } from "pinia";
const pinia = createPinia()
export default pinia

import { db } from "@/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const useDatabaseStore = defineStore({
    id: 'database',
    state: () => ({
        name: "",
        location: "",
        date: "",
        organizer: "",
        time: "",
    }),
    actions: {
        saveEvent() {
            try {
                addDoc(collection(db, "Events"), {
                    eventName: this.name,
                    eventLocation: this.location,
                    eventDate: this.date,
                    eventOrganizer: this.organizer,
                    eventTime: this.time,
                });
                alert("event created");
            } catch (err) {
                alert("Error adding event: ", err);
            }
        },

    },
    getters: {
        
    }
})