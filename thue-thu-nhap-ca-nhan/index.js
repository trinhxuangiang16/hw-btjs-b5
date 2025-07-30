// Mô hình 3 khối
/*
- input: Tên, thu nhập, số người phụ thuộc
- Cách tính: Thu nhập chịu thuế = Tổng thu nhập nă - 4tr - Số người phụ thuộc * 1.6tr và %6 sẽ chẹnh lêch nếu có thu nhập cao hơn
- Kết quả: Thuế phải đóng
*/

let tinhThue = function () {
  let name = document.getElementById("name").value;
  let tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  let tongThuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  console.log(tongThuNhapChiuThue);
  let tienThuePhaiDong;

  if (tongThuNhapChiuThue <= 60000000) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.05;
  } else if (
    tongThuNhapChiuThue > 60000000 &&
    tongThuNhapChiuThue <= 120000000
  ) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.1;
  } else if (
    tongThuNhapChiuThue > 120000000 &&
    tongThuNhapChiuThue <= 210000000
  ) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.15;
  } else if (
    tongThuNhapChiuThue > 210000000 &&
    tongThuNhapChiuThue <= 384000000
  ) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.2;
  } else if (
    tongThuNhapChiuThue > 384000000 &&
    tongThuNhapChiuThue <= 624000000
  ) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.25;
  } else if (
    tongThuNhapChiuThue > 624000000 &&
    tongThuNhapChiuThue <= 960000000
  ) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.3;
  } else if (tongThuNhapChiuThue > 960000000) {
    tienThuePhaiDong = tongThuNhapChiuThue * 0.35;
  } else {
    tienThuePhaiDong = 0;
  }

  console.log(tienThuePhaiDong);
  document.getElementById(
    "ketQua"
  ).innerText = `SỐ tiền thuế TNCN bạn phải đóng là ${tienThuePhaiDong.toLocaleString()} VNĐ `;
};
