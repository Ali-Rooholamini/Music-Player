<template>
  <div>
    <svg
      v-if="iconName == 'check'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.4 11.9"
      fill="currentColor"
      :width="width"
      :height="height"
    >
      <path
        d="M12.6.1L6 6.8 2.8 3.6c-.2-.2-.4-.2-.6 0L.1 5.7c-.1.1-.1.4 0 .5l5.6 5.6c.2.2.4.2.6 0l9-9c.2-.2.2-.4 0-.6L13.2.1c-.2-.1-.4-.1-.6 0z"
      />
    </svg>
    <svg
      v-if="iconName == 'briefcase'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 95.4 96.9"
      fill="currentColor"
      :width="width"
      :height="height"
    >
      <path
        d="M0 17.9v61.6c0 1.6 1.3 2.9 2.9 2.9H15V15H2.9C1.3 15 0 16.3 0 17.9zM94.2 15h-12v67.4h12.1c1.6 0 2.9-1.3 2.9-2.9V17.9c-.1-1.6-1.4-2.9-3-2.9zM66.3 3.7c0-2.1-1.7-3.7-3.7-3.7H34.5c-2.1 0-3.7 1.7-3.7 3.7V15H19.6v67.4h58V15H66.3V3.7zM38.3 15V7.5h20.6V15H38.3z"
      />
    </svg>
    <svg
      v-if="iconName == 'star'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.5 118.8"
      fill="currentColor"
      :width="width"
      :height="height"
    >
      <path
        d="M65.9 2.3L82.8 37l38.2 5.3c3.3.5 4.7 4.6 2.2 6.9L95.4 76l6.8 38c.6 3.3-2.9 5.9-5.9 4.3l-34.1-18.2-34.1 18.2c-3 1.6-6.5-1-5.9-4.3L29 76 1.2 49.2c-2.4-2.3-1.1-6.5 2.2-6.9L41.7 37 58.6 2.3c1.5-3.1 5.8-3.1 7.3 0z"
      />
    </svg>
    <svg
      v-if="iconName == 'arrowLeft'"
      viewBox="0 0 10 17"
      :width="width"
      :height="height"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M7.5296 15.9313L0.649559 9.07164C0.567897 8.98998 0.510189 8.90152 0.476435 8.80624C0.442137 8.71097 0.424988 8.60889 0.424988 8.50001C0.424988 8.39113 0.442137 8.28905 0.476435 8.19378C0.510189 8.0985 0.567897 8.01004 0.649559 7.92837L7.5296 1.04833C7.72015 0.857785 7.95833 0.762512 8.24415 0.762512C8.52996 0.762512 8.77495 0.86459 8.97911 1.06875C9.18326 1.2729 9.28534 1.51108 9.28534 1.78329C9.28534 2.0555 9.18326 2.29368 8.97911 2.49783L2.97693 8.50001L8.97911 14.5022C9.16965 14.6927 9.26493 14.9274 9.26493 15.2061C9.26493 15.4854 9.16285 15.7271 8.95869 15.9313C8.75454 16.1354 8.51635 16.2375 8.24415 16.2375C7.97194 16.2375 7.73376 16.1354 7.5296 15.9313Z"
      />
    </svg>
    <svg
      v-if="iconName == 'menu'"
      :width="width"
      :height="height"
      viewBox="0 0 3 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.28534 5.495V5.505M1.28534 1.495V1.505M1.28534 9.495V9.50499"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: false,
      default: 22,
    },
    height: {
      type: Number,
      required: false,
      default: 22,
    },
  },
};
</script>
