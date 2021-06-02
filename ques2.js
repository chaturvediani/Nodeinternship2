
     const TimeFormat = function (str) {
        var [h, m, s] = str.split(":");
      
        h = parseInt(h) % 12;
        m = parseInt(m);
        isPM = s.slice(-2) === "PM" ? true : false;
        s = parseInt(secs.slice(0,2));
        if (isPM) {
          h += 12;
        }
        s += 45;
        m += 45;
      
        if (s >= 60) {
          m += 1;
          s = s - 60;
        }
      
        if (m >= 60) {
          h += 1;
          m = m - 60;
        }
        
        if (h === 24) {
          h = 0;
        }
      
        h = ("0" + h).slice(-2);
        m = ("0" + m).slice(-2);
        s = ("0" + s).slice(-2);
      
        return `${h}:${m}:${s}`;
      };
      
      str1 = "12:01:00PM";
      str2 = "12:01:00AM";
      str3 = "11:14:15PM";
      console.log(TimeFormat(str1));
      console.log(TimeFormat(str2));
      console.log(TimeFormat(str3)); 


