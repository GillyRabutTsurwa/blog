<template>
  <!-- pour le moment ce composant sera un modal -->
  <div class="modal-test">
    <!-- <div id="year" class="year">{{ currentYear + 1 }}</div> -->
    <div class="countdown">
      <h2 class="countdown__title">Blog Site Coming Soon:</h2>
      <div class="countdown__content">
        <div class="time">
          <h3 class="time__display">{{ daysRemaining }}</h3>
          <small>days</small>
        </div>
        <div class="time">
          <h3 class="time__display">{{ hoursRemaining }}</h3>
          <small>hours</small>
        </div>
        <div class="time">
          <h3 class="time__display">{{ minutesRemaining }}</h3>
          <small>minutes</small>
        </div>
        <div class="time">
          <h3 class="time__display">{{ secondsRemaining }}</h3>
          <small>seconds</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysRemaining: 0,
      hoursRemaining: 0,
      minutesRemaining: 0,
      secondsRemaining: 0,
    };
  },
  computed: {
    countSeconds() {
      return 1000;
    },
    countMinutes() {
      return this.countSeconds * 60;
    },
    countHours() {
      return this.countMinutes * 60;
    },
    countDays() {
      return this.countHours * 24;
    },
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const releaseDate = new Date(`January 01 ${now.getFullYear() + 1} 00:00:00`);
        const difference = releaseDate.getTime() - now.getTime();

        if (difference < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(difference / this.countDays);
        const hours = Math.floor((difference % this.countDays) / this.countHours);
        const minutes = Math.floor((difference % this.countHours) / this.countMinutes);
        const seconds = Math.floor((difference % this.countMinutes) / this.countSeconds);

        this.daysRemaining = days < 10 ? "0" + days : days;
        this.hoursRemaining = hours < 10 ? "0" + hours : hours;
        this.minutesRemaining = minutes < 10 ? "0" + minutes : minutes;
        this.secondsRemaining = seconds < 10 ? "0" + seconds : seconds;
      }, 1000);
    },
  },
  mounted() {
    this.showRemaining();
  },
};
</script>

<style>
.modal-test {
  background-image: url("https://images.unsplash.com/photo-1551077095-ba46221b51ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}
.modal-test::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-test * {
  z-index: 1000;
}

.year {
  font-size: 20rem;
  z-index: -1;
  opacity: 0.2;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.countdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25rem;
}

.countdown__title {
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
}

.countdown__content {
  /* display: none; */
  display: flex; /* well, ceci a tout reparé */
  -webkit-transform: scale(2);
  transform: scale(2);
}
.countdown__content .time {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 1.5rem;
}
.countdown__content .time .time__display {
  margin: 0 0 0.5rem;
  font-size: 3rem;
}

.countdown__content .time small {
  text-transform: capitalize;
}
</style>