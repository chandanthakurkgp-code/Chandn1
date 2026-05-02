// 1. Google Sheet का CSV लिंक यहाँ डालें (इसे बदलना न भूलें)
const googleSheetURL = 'YOUR_PUBLISHED_CSV_LINK_HERE';

// आपका ओरिजिनल स्ट्रक्चर वैसा ही रहेगा
let teacherData = {
    "teacher": {
        "title": "Teachers",
        "icon": "👨‍🏫",
        "rates": ["Per Subject: ₹500", "Home Tuition: ₹1500"],
        "partners": [] // यहाँ का डेटा अब Google Sheet से आएगा
    }
};

// डेटा को लोड करने का तरीका
Papa.parse(googleSheetURL, {
    download: true,
    header: true,
    complete: function(results) {
        // आपके ओरिजिनल 'partners' के फॉर्मेट में डेटा सेट करना
        teacherData.teacher.partners = results.data.map(row => ({
            "name": row.name,
            "address": row.address,
            "mobile": row.mobile,
            "whatsapp": row.whatsapp,
            "viewLink": row.viewLink || "#",
            "cardLink": row.cardLink || "#",
            "mapLink": row.mapLink || "#"
        }));

        // डेटा लोड होने के बाद वेबसाइट को रिफ्रेश करने वाला फंक्शन यहाँ लिखें
        // उदाहरण के लिए: if (typeof render === "function") render();
        console.log("Website Updated from Google Sheet!");
    }
});
