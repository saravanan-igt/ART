$(document).ready(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 150,
    max: 3000,
    from: 200,
    to: 2800,
    grid: true,
    prefix: "AED ",
  });

  var start = moment("2016-10-02 00:00", "YYYY-MM-DD HH:mm");
  var end = moment("2016-10-02 23:59", "YYYY-MM-DD HH:mm");

  $(".departure-range-slider, .arrival-range-slider").ionRangeSlider({
    type: "double",
    grid: true,
    min: start.format("x"),
    max: end.format("x"),
    step: 1800000,
    prettify: function (num) {
      return moment(num, "x").format("h:mm A");
    },
  });

  $(".refine-search").click(function () {
    $(".flight-search").slideToggle();
  });
  $(".only-link").click(function (event) {
    event.preventDefault();
    let parent = $(this).closest(".checkbox-container").parent();
    let currentCb = $(this).closest(".checkbox-label");
    $("input", parent).prop("checked", false);
    $("input", currentCb).prop("checked", true);
  });

  $sidebar = $("#filterSideBar");
  $window = $(window);
  var sidebarOffset = $sidebar.offset();

  // $("#filterSideBar").sticky({ topSpacing: 150 });
  // $("#filterSideBar").on("bottom-reached", function () {
  //   console.log("bottom-reached");
  // });

  $(window).scroll(function () {
    var sticky = $("#filterSideBar"),
      scroll = $(window).scrollTop();
    var footerScroll =
      $(".footer").offset().top -
      $(".footer").height() -
      $(".header").height() -
      60;
    //$(".footer").first().scrollTop();
    console.log("footerScroll1", scroll, footerScroll);
    if (scroll >= 150 && scroll < footerScroll)
      sticky.addClass("sticky-sidebar");
    else sticky.removeClass("sticky-sidebar");
  });

  $('[data-toggle="tab"]').click(function () {
    let _href = $(this).attr("data-flightType");
    if (_href === "oneWay") {
      $(".flyingto").slideUp();
    } else {
      $(".flyingto").slideDown();
    }
  });

  // $window.scroll(function () {
  //   if ($window.scrollTop() > sidebarOffset.top) {
  //     $sidebar.css({
  //       "max-height": $window.height() - 160 + "px",
  //       overflow: "auto",
  //       position: "fixed",
  //       left: 50,
  //       width: 284,
  //     });
  //     $sidebar.stop().animate({
  //       top: 150,-
  //     });
  //   } else {
  //     $sidebar.css({
  //       "max-height": "unset",
  //       overflow: "unset",
  //       position: "static",
  //       width: "auto",
  //     });
  //     $sidebar.stop().animate({
  //       marginTop: 0,
  //     });
  //   }
  // });
});

var app2 = new Vue({
  el: "#app-2",
  vuetify: new Vuetify(),
  data: {
    date: new Date().toISOString().substr(0, 10),
    checkInDate: new Date().toISOString().substr(0, 10),
    menu: false,
    checkInMenu: false,
    checkOutMenu: false,
    todos: [
      { show: true, group: 1 },
      { show: false, groupId: 1 },
      { show: false, groupId: 1 },
      { show: false, groupId: 1 },
      { show: false, groupId: 1 },
      { show: false, groupId: 1 },
      { show: true },
      { show: true },
      { show: true },
      { show: true },
      { show: true },
    ],
    tooltipColor: "rgba(0,0,0,0.9)",
    ratingFilter: [
      {
        rate: 5,
        count: 19,
        price: 2437,
      },
      {
        rate: 4,
        count: 19,
        price: 2437,
      },
      {
        rate: 3,
        count: 19,
        price: 2437,
      },
      {
        rate: 2,
        count: 19,
        price: 2437,
      },
      {
        rate: 1,
        count: 19,
        price: 2437,
      },
    ],
    AmenitiesFilter: [
      {
        name: "Baby Sitting",
        count: 19,
        price: 2437,
      },
      {
        name: "Parking",
        count: 19,
        price: 2437,
      },
      {
        name: "Restaurant",
        count: 19,
        price: 2437,
      },
      {
        name: "Internet",
        count: 19,
        price: 2437,
      },
      {
        name: "Night Club",
        count: 19,
        price: 2437,
      },
    ],
    PropertyFilter: [
      {
        name: "Hotels",
        count: 19,
        price: 2437,
      },
      {
        name: "Apartments",
        count: 19,
        price: 2437,
      },
      {
        name: "Homestays",
        count: 19,
        price: 2437,
      },
      {
        name: "Bed and Breakfasts",
        count: 19,
        price: 2437,
      },
      {
        name: "Villas",
        count: 19,
        price: 2437,
      },
    ],
    AreaFilter: [
      {
        name: "Sultan Qaboos Grand Mosque",
        count: 19,
        price: 2437,
      },
      {
        name: "Mutrah Souq",
        count: 19,
        price: 2437,
      },
      {
        name: "Qurum Natural Park",
        count: 19,
        price: 2437,
      },
    ],
    hotelList: [
      {
        pic: "assets/hotel/result/1.jpg",
        name: "Al Maha International",
        price: 216,
        actualPrice: 310,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/2.jpg",
        name: "Al Maha International",
        price: 216,
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/3.jpg",
        name: "Al Maha International",
        price: 216,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/4.jpg",
        name: "Al Maha International",
        price: 216,
        actualPrice: 310,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/5.jpg",
        name: "Al Maha International",
        price: 216,
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/6.jpg",
        name: "Al Maha International",
        price: 216,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/1.jpg",
        name: "Al Maha International",
        price: 216,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/2.jpg",
        name: "Al Maha International",
        price: 216,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
      {
        pic: "assets/hotel/result/3.jpg",
        name: "Al Maha International",
        price: 216,
        deal: "Hot Deal",
        star: 3,
        address:
          "C.R. No 1065923, P.O. Box: 57, P.C. 130, Al Ghubrah, Azaiba, , OMAN, , MUSCAT",
        details:
          "FacilitiesA lobby and a reception are available to guests. The upper floors are easily accessible using the lift. Amenities include a safe. Internet access (for a fee) and wireless internet access are available in the public areas. The hotel offers a range of amenities for a comfortable stay, including gastronomic options such as a restaurant, a café and a bar. A playroom is also among the amenities at the hotel. Guests arriving in their own vehicles can park in the car park. Additional services include room service and a laundry. There is a business area with a conference room and a business centre.RoomsAll rooms feature air conditioning and a bathroom. A safe and a minibar also feature. The accommodation units offer a range of amenities, including tea and coffee making equipment. Internet access, a telephone, a TV, a DVD player and wireless internet access are provided as standard. In each of the bathrooms, guests will find a shower, a bathtub and a hairdryer.Sports/EntertainmentThe hotel offers an outdoor pool. The terrace is the perfect place to while away the time. Active guests have various leisure options to choose from, including a gym, pool/billiards and massage treatments. MealsVarious meals and board options are bookable. Guests can choose from breakfast, lunch, dinner, half board and full board.",
        nearbyTransport: ["15 Km from Muscat International Airport"],
        nearbyAttraction: [
          "7 Km,  from Quurm Beach",
          "3 Km,  from Sultan Qaboos Grand Mosque",
          "2 Km,  from Al Ghubrah Beach",
        ],
        amenities: ["1 swimming pool", "Fitness Center", "Spa", "Beachfront"],
      },
    ],
    slides: ["1", "2", "3", "4", "5"],
    flightDetailsDialog: false,
    baggageDetailsDialog: false,
    fareDetailsDialog: false,
    fareRulesDialog: false,
    directFlight: false,
    hoteDetailDialog: false,
    hotelGalleryDialog: false,
    hotelDetailText: "",
  },
  methods: {
    bookNow: function (event) {
      window.location = "flightReview.html";
    },
    hotelBooking: function (event) {
      window.location = "hotelReview.html";
    },
    showResultGroup: function (event) {
      this.todos.map((item) => {
        if (item.groupId === event.group) {
          item.show = !item.show;
        }
      });
    },
  },
});
