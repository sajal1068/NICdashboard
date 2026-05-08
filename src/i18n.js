import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            home: "Home",
            about_us: "About Us",
            media_gallery: "Media Gallery",
            photo_gallery: "Photo Gallery",
            video_gallery: "Video Gallery",
            mobile_apps: "Mobile Apps",
            ios: "iOS",
            android: "Android",
            know_your_report: "Know Your Report",
            user_manual: "User Manual",
            download_ppt: "Download National ToT PPT",
            contact_us: "Contact Us",
            login: "Login",
          },
          government_of_india: "Government of India",
          skip_to_main: "Skip to main content",
          mission_title: "National Sickle Cell Anaemia Elimination Mission",
          elimination_mission: "Elimination Mission 2047",
          about: "About",
          sickle_cell_disease: " Sickle Cell Disease",
          privacy_policy: "Privacy Policy",
          contact: "Contact Us",
          sitemap: "Sitemap",
          website_contents:
            "Website contents are being maintained by Ministry of Health and Family Welfare, Government of India and data is being managed by respective States. ",
          footer: {
            credit:
              "Website has been designed, developed, maintained and hosted by <1>National Informatics Centre (NIC)</1>",
          },
          home_about:
            "Sickle cell disease is a genetic blood disease which affects the whole life of affected patient. It is more common in the tribal population of India, but occurs in non tribals too. It not only causes anemia but also pain crises, reduced growth, and affects many organs like lungs, heart, kidney, eyes, bones and the brain. India has the largest density of tribal population, globally. As per Census 2011, India has an 8.6% tribal population which is 67.8 million across the Indian states.",
          read_detailed_guidelines: "Read Detailed Guidelines",
          impact:
            "India has the largest density of tribal population globally. As per Census 2011, India has an 8.6% tribal population which is 67.8 million across the Indian states",
          health_report_home: "National Health Mission Report",
          national_ppt: "Download National ToT PPT",
          download_guidelines: "Download Guidelines",
          census_label: "Census 2011 Data",
          impact_heading: "Impact in <1/> <2>India</2>",
          live_mission_progress: "Live Mission Progress",
        },
      },
      hi: {
        translation: {
          menu: {
            home: "मुख्य पृष्ठ",
            about_us: "हमारे बारे में",
            media_gallery: "मीडिया गैलरी",
            photo_gallery: "फोटो गैलरी",
            video_gallery: "वीडियो गैलरी",
            mobile_apps: "मोबाइल ऐप्स",
            ios: "iOS",
            android: "Android",
            know_your_report: "अपनी रिपोर्ट जानें",
            user_manual: "उपयोगकर्ता पुस्तिका",
            download_ppt: "नेशनल टीओटी पीपीटी डाउनलोड करें",
            contact_us: "संपर्क करें",
            login: "लॉगिन",
          },
          government_of_india: "भारत सरकार",
          skip_to_main: "मुख्य सामग्री पर जाएं",
          mission_title: "राष्ट्रीय सिकल सेल एनीमिया उन्मूलन मिशन",
          elimination_mission: "उन्मूलन मिशन  2047",
          about: "के बारे में",
          sickle_cell_disease: " सिकल सेल रोग ",
          privacy_policy: "गोपनीयता नीति",
          contact: "संपर्क करें",
          sitemap: "वेबसाइट का मानचित्र",
          website_contents:
            "वेबसाइट की सामग्री का रखरखाव स्वास्थ्य और परिवार कल्याण मंत्रालय, भारत सरकार द्वारा किया जा रहा है और डेटा का प्रबंधन संबंधित राज्यों द्वारा किया जा रहा है।",
          footer: {
            credit:
              "इस वेबसाइट को <1>राष्ट्रीय सूचना विज्ञान केंद्र (NIC) </1> द्वारा डिज़ाइन, विकसित, अनुरक्षित और होस्ट किया गया है।",
          },
          last_updated: "",
          home_about:
            "सिकल सेल बीमारी एक जेनेटिक खून की बीमारी है जो मरीज़ की पूरी ज़िंदगी पर असर डालती है। यह भारत की आदिवासी आबादी में ज़्यादा आम है, लेकिन गैर-आदिवासियों में भी होती है। इससे न सिर्फ़ एनीमिया होता है, बल्कि दर्द के दौरे, ग्रोथ में कमी और फेफड़े, दिल, किडनी, आँखें, हड्डियाँ और दिमाग जैसे कई अंगों पर भी असर पड़ता है। दुनिया भर में भारत में आदिवासी आबादी की डेंसिटी सबसे ज़्यादा है। 2011 की जनगणना के अनुसार, भारत में 8.6% आदिवासी आबादी है, जो भारतीय राज्यों में 67.8 मिलियन है।",
          read_detailed_guidelines: "विस्तृत दिशानिर्देश पढ़ें",
          impact:
            "विश्व स्तर पर, भारत में जनजातीय आबादी का घनत्व सबसे अधिक है। 2011 की जनगणना के अनुसार, भारत में 8.6% जनजातीय आबादी है, जो कि भारतीय राज्यों में कुल मिलाकर 67.8 मिलियन है।",
          health_report_home: "राष्ट्रीय स्वास्थ्य मिशन रिपोर्ट",
          national_ppt: "नेशनल टीओटी पीपीटी डाउनलोड करें",
          download_guidelines: "दिशा-निर्देश डाउनलोड करें",

          census_label: "2011 की जनगणना के आंकड़े",
          impact_heading: "<2>भारत</2> में प्रभाव <1/>",
          live_mission_progress: "मिशन की लाइव प्रगति",
        },
        
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
