document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.ourcollection-list_container').scrollBy({
      left: 700, // Thay đổi giá trị này để điều chỉnh khoảng cách scroll
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.ourcollection-list_container').scrollBy({
      left: -700, // Thay đổi giá trị này để điều chỉnh khoảng cách scroll
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.next-stl').addEventListener('click', function() {
    document.querySelector('.ourcollection-list_container_styling').scrollBy({
      left: 400, // Thay đổi giá trị này để điều chỉnh khoảng cách scroll
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.prev-stl').addEventListener('click', function() {
    document.querySelector('.ourcollection-list_container_styling').scrollBy({
      left: -400, // Thay đổi giá trị này để điều chỉnh khoảng cách scroll
      behavior: 'smooth'
    });
  });

  document.querySelector('.next-feedback').addEventListener('click', function() {
    document.querySelector('.feedback-list_container').scrollBy({
      left: 400, // Thay đổi giá trị này để điều chỉnh khoảng cách scroll
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.prev-feedback').addEventListener('click', function() {
    document.querySelector('.feedback-list_container').scrollBy({
      left: -400, // Thay đổi giá trị này để điều chỉnh khoảng cách scroll
      behavior: 'smooth'
    });
  });

  //-------------------------------------------//
var openBtn = document.getElementById("btn-openModal");
var modal = document.getElementById("taskbar");
var closeBtn = document.getElementById("btn-closeModal");

openBtn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var opens = document.getElementById("open-search-btn");
var modals = document.getElementById("search-modal");
var closes = document.getElementById("search_btnclose");

opens.onclick = function() {
  modals.style.display = "block";
};

closes.onclick = function() {
  modals.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
};



