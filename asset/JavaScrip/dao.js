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