export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.db.loadData({
    data: [
      {
        id: "1",
        name: "Smart Watch for Men Women",
        description:
          "Alexa Built-in, 1.7 Touch Screen Fitness Tracker with Heart Rate Sleep Tracking, 60 Sports Modes, 5ATM Waterproof Smartwatch for Android iPhone",
        price: {
          original: 199.95,
          current: 99.98,
        },
        features: [
          "【Call Receiving/Dialing & Alexa Built-in】Directly use the smart watch with text and call to make and answer calls through the built-in microphone. Stay connected to SMS and APP messages(Text, Facebook, WhatsApp, Instagram, Twitter, etc.), never miss any important information. Amazon Alexa on your smartwatch for men frees your hands from your phone. Ask questions, control music playback, check weather, set alarms, timers, and more just by speaking to your watch.",
          "【24/7 Accurate Health Monitoring】Smart watch for android phones with advanced sensors provide insights to help you better understand your health and make a reasonable adjustment on your lifestyle. Keep an eye on your health metrics (heart rate, blood oxygen, sleep and stress level), as well as recording female menstrual period. And it will monitor your sleep status automatically and provides comprehensive sleep quality analysis (deep sleep, light sleep and awake), better sleep starts here.",
          "【Fitness Tracker & 60 Sports Modes】Fitness watch comes with 60 sports modes such as soccer, walking, running, swimming, hiking, cycling, mountaineering, yoga, etc. Accurately record all-day activities like steps, distance, calories burned, miles walked, and active minutes. The fitness tracker for men women is 5ATM waterproof, so you can wear it in the swimming pool, wash hands, and shower without worry. However, it is not recommended for use in hot water or seawater.",
          "【Smart Life Partner & DIY Background】Multi-functional Smart Watch with 1.7HD Extra-large full touch screen brings you a unique visual and better interactive experience. You can upload your favorite pictures as your watch faces. It contains many daily useful tools, such as Noise monitoring, Message reminder, Weather forecast, Music control, Stress monitoring, Setting alarms, Stopwatch, timer, Sedentary reminder, Breather guide, Raise to wake, Find phone, adjustable brightness and more.",
          "【Wider Compatibility & 24/7 After-sales Support】Tensky smart watch with text and call works seamlessly with Bluetooth 5.0 + and most iOS 9.0+ & Android 6.0+ smartphones (For smartphones only, not for PC, laptops or iPads), great gifts for women men! 1-year warranty promised by Tensky. We are striving to provide you with the best service, any questions please don't hesitate to tell us, our professional technical team is standing by within 24 hours!",
        ],
        colors: [
          {
            color: "pink",
            image:
              "https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_SL1500_.jpg",
          },
          {
            color: "black",
            image:
              "https://m.media-amazon.com/images/I/71cB+13yVmL._AC_SL1500_.jpg",
          },
          {
            color: "blue",
            image:
              "https://m.media-amazon.com/images/I/51Zy6VmoMOL._AC_SL1500_.jpg",
          },
          {
            color: "lightBlue",
            image: "https://m.media-amazon.com/images/I/51wkkM1gFVL._AC_.jpg",
          },
        ],
      },
      {
        id: "2",
        name: "Casio Unisex",
        description:
          "F-108WH-1ACF Big Square Digital Display Quartz Black Watch",
        price: {
          original: 22.95,
          current: 16.98,
        },
        features: [
          "Square watch with digital display featuring LED light, daily alarm, and hourly time signal",
          "42.4 mm stainless steel case with mineral dial window",
          "Quartz movement with digital display, 1/100 Sec. Stopwatch",
          "Resin band with buckle closure",
          "Water Resistant; Accuracy : ±30 Seconds a month",
        ],
        colors: [
          {
            color: "white",
            image:
              "https://m.media-amazon.com/images/I/51JEgEiBk5L._AC_SY675._SX._UX._SY._UY_.jpg",
          },
          {
            color: "black",
            image:
              "https://m.media-amazon.com/images/I/510T962DtNL._AC_UY535_.jpg",
          },
          {
            color: "red",
            image:
              "https://m.media-amazon.com/images/I/51oXIrwNjKL._AC_SY675._SX._UX._SY._UY_.jpg",
          },
        ],
      },
      {
        id: "3",
        name: "Apple Watch Series 8",
        description:
          "[GPS 45mm] Smart Watch w/Midnight Aluminum Case with Midnight Sport Band - M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
        price: {
          original: 22.95,
          current: 16.98,
        },
        features: [
          "WHY APPLE WATCH SERIES 8 — Your essential companion for a healthy life is now even more powerful. Advanced sensors provide insights to help you better understand your health. New safety features can get you help when you need it. The bright, Always-On Retina display is easy to read, even when your wrist is down.",
          "EASILY CUSTOMIZABLE — Available in a range of sizes and materials, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.",
          "INNOVATIVE SAFETY FEATURES — Crash Detection and Fall Detection can automatically connect you with emergency services in the event of a severe car crash or a hard fall. And Emergency SOS provides urgent assistance with the press of a button.",
          "ADVANCED HEALTH FEATURES — Temperature sensing is a breakthrough feature that provides deep insights into women’s health. Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular rhythm. And see how much time you spent in REM, Core, or Deep sleep with Sleep Stages.",
          "SIMPLY COMPATIBLE — It works seamlessly with your Apple devices and services. Unlock your Mac automatically. Find your devices with a tap. Pay and send money with Apple Pay. Apple Watch requires an iPhone 8 or later with the latest iOS version.",
          "INCREDIBLE DURABILITY — Tougher than tough. It’s crack resistant, IP6X-certified dust resistant, and swimproof with WR50 water resistance.",
          "A POWERFUL FITNESS PARTNER — The enhanced Workout app gives you new ways to train, and advanced metrics for more information about your workout performance. And Apple Watch comes with three months of Apple Fitness+ free.",
          "APPS ON YOUR WRIST — With access to tens of thousands of apps on the App Store right on your wrist, Apple Watch is the perfect personal device for whatever you love to do.",
          "STAY CONNECTED — Send a text, make a call, listen to music and podcasts, use Siri, and get notifications on the go. Apple Watch Series 8 (GPS) works with your iPhone or Wi-Fi to keep you connected.",
          "LEGAL DISCLAIMERS — This is a summary of the main product features. See below to learn more.",
        ],
        colors: [
          {
            color: "black",
            image:
              "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg",
          },
          {
            color: "lightGrey",
            image:
              "https://m.media-amazon.com/images/I/71rimxfInpL._AC_SL1500_.jpg",
          },
          {
            color: "red",
            image:
              "https://m.media-amazon.com/images/I/71kUZq7ON3L._AC_SL1500_.jpg",
          },
        ],
      },
      {
        id: "4",
        name: "Apple Watch SE ",
        description:
          "(2nd Gen) [GPS 40mm] Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - S/M. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant",
        price: {
          original: 22.95,
          current: 16.98,
        },
        features: [
          "WHY APPLE WATCH SE — All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever.",
          "EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.",
          "HEALTH AND SAFETY FEATURES — Get help when you need it with Crash Detection, Fall Detection, and Emergency SOS. Get deep insights into your health, including notifications if you have an irregular rhythm or an unusually high or low heart rate.",
          "SIMPLY COMPATIBLE — It works seamlessly with your Apple devices and services. Unlock your Mac automatically. Find your devices with a tap. Pay and send money with Apple Pay. Apple Watch requires an iPhone 8 or later with the latest iOS version.",
          "SWIMPROOF AND STYLISH — Water resistant to 50 meters. Three finishes. And a redesigned, color-matched back case made with a new production process that reduces its carbon emissions over 80 percent.",
          "APPS ON YOUR WRIST — With access to tens of thousands of apps on the App Store right on your wrist, Apple Watch is the perfect personal device for whatever you love to do.",
          "A POWERFUL FITNESS PARTNER — The enhanced Workout app gives you new ways to train and advanced metrics for more information about your workout performance. And Apple Watch comes with three months of Apple Fitness+ free.",
          "STAY CONNECTED — Send a text, make a call, listen to music and podcasts, use Siri, or call for help with Emergency SOS. Apple Watch SE (GPS) works with your iPhone or Wi-Fi to keep you connected.",
          "APPLECARE — Every Apple Watch comes with one year of hardware repair coverage through its limited warranty and up to 90 days of complimentary technical support. Get AppleCare+ to extend your coverage and reduce the stress and cost of unexpected repairs.",
          "LEGAL DISCLAIMERS — This is a summary of the main product features. See below to learn more.",
        ],
        colors: [
          {
            color: "black",
            image:
              "https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_SL1500_.jpg",
          },
          {
            color: "lightGrey",
            image:
              "https://m.media-amazon.com/images/I/71YdE55GwjL._AC_SL1500_.jpg",
          },
          {
            color: "white",
            image:
              "https://m.media-amazon.com/images/I/7122bjHMoFL._AC_SL1500_.jpg",
          },
        ],
      },
    ],
  });
}
