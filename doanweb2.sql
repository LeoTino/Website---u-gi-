-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 20, 2018 lúc 10:20 AM
-- Phiên bản máy phục vụ: 10.1.26-MariaDB
-- Phiên bản PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doanweb2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhgia`
--

CREATE TABLE `danhgia` (
  `MaNguoiDanhGia` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `NhanXet` varchar(1500) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `danhgia`
--

INSERT INTO `danhgia` (`MaNguoiDanhGia`, `MaSP`, `NhanXet`) VALUES
(1, 1, 'hàng ok lắm'),
(1, 2, 'ok ok lắm good job'),
(2, 1, 'hàng xài  được lúc đầu ok, được mấy ngày thì hư');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `MaDM` int(11) NOT NULL,
  `TenDM` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`MaDM`, `TenDM`) VALUES
(1, 'Điện thoại'),
(2, 'Máy tính bảng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachyeuthich`
--

CREATE TABLE `danhsachyeuthich` (
  `id` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `danhsachyeuthich`
--

INSERT INTO `danhsachyeuthich` (`id`, `MaSP`, `MaNguoiDung`) VALUES
(1, 1, 3),
(3, 2, 3),
(4, 3, 4),
(5, 3, 3),
(18, 2, 4),
(19, 5, 4),
(20, 6, 4),
(21, 1, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daugia`
--

CREATE TABLE `daugia` (
  `id` int(11) NOT NULL,
  `MaNguoiDau` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `ThoiGianDauGia` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `GiaDau` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `daugia`
--

INSERT INTO `daugia` (`id`, `MaNguoiDau`, `MaSP`, `ThoiGianDauGia`, `GiaDau`) VALUES
(1, 0, 1, '0000-00-00 00:00:00', '0'),
(2, 0, 2, '0000-00-00 00:00:00', '0'),
(3, 0, 3, '0000-00-00 00:00:00', '0'),
(4, 0, 4, '0000-00-00 00:00:00', '0'),
(5, 0, 5, '0000-00-00 00:00:00', '0'),
(6, 0, 6, '0000-00-00 00:00:00', '0'),
(7, 0, 7, '0000-00-00 00:00:00', '0'),
(8, 0, 8, '0000-00-00 00:00:00', '0'),
(9, 0, 9, '0000-00-00 00:00:00', '0'),
(10, 0, 10, '0000-00-00 00:00:00', '0'),
(11, 0, 11, '0000-00-00 00:00:00', '0'),
(12, 0, 12, '0000-00-00 00:00:00', '0'),
(13, 0, 13, '0000-00-00 00:00:00', '0'),
(14, 0, 14, '0000-00-00 00:00:00', '0'),
(15, 0, 15, '0000-00-00 00:00:00', '0'),
(16, 0, 16, '0000-00-00 00:00:00', '0'),
(17, 0, 17, '0000-00-00 00:00:00', '0'),
(18, 0, 18, '0000-00-00 00:00:00', '0'),
(19, 0, 19, '0000-00-00 00:00:00', '0'),
(20, 0, 20, '0000-00-00 00:00:00', '0'),
(21, 0, 21, '0000-00-00 00:00:00', '0'),
(22, 0, 22, '0000-00-00 00:00:00', '0'),
(23, 0, 23, '0000-00-00 00:00:00', '0'),
(24, 0, 24, '0000-00-00 00:00:00', '0'),
(25, 0, 25, '0000-00-00 00:00:00', '0'),
(26, 0, 26, '0000-00-00 00:00:00', '0'),
(27, 0, 27, '0000-00-00 00:00:00', '0'),
(28, 0, 28, '0000-00-00 00:00:00', '0'),
(29, 0, 29, '0000-00-00 00:00:00', '0'),
(30, 0, 30, '0000-00-00 00:00:00', '0'),
(31, 0, 31, '0000-00-00 00:00:00', '0'),
(32, 0, 32, '0000-00-00 00:00:00', '0'),
(33, 0, 33, '0000-00-00 00:00:00', '0'),
(34, 0, 34, '0000-00-00 00:00:00', '0'),
(35, 0, 35, '0000-00-00 00:00:00', '0'),
(36, 4, 1, '2018-06-02 18:00:00', '3250000'),
(39, 4, 3, '2018-06-07 17:00:00', '4250000'),
(40, 3, 1, '2018-06-09 16:55:52', '313131231'),
(41, 4, 1, '2018-06-10 09:11:04', '3100000'),
(42, 4, 1, '2018-06-10 09:19:24', '3100000'),
(43, 4, 3, '2018-06-10 09:20:05', '8850000'),
(44, 4, 5, '2018-06-10 09:25:54', '3256020'),
(45, 4, 2, '2018-06-10 09:26:41', '2250000'),
(54, 3, 1, '2018-06-18 14:49:51', '3100000'),
(55, 3, 1, '2018-06-18 14:50:02', '3200000'),
(56, 3, 2, '2018-06-18 14:57:12', '2350000'),
(57, 5, 2, '2018-06-18 14:59:08', '3350000'),
(58, 5, 2, '2018-06-18 15:00:25', '4000000'),
(59, 5, 2, '2018-06-18 15:01:00', '5000000'),
(60, 5, 2, '2018-06-18 15:01:15', '6000000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giatudong`
--

CREATE TABLE `giatudong` (
  `MaSP` int(11) NOT NULL,
  `MaNguoiMua` int(11) NOT NULL,
  `GiaMax` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ketquadaugia`
--

CREATE TABLE `ketquadaugia` (
  `MaSP` int(11) NOT NULL,
  `MaNguoiDauThanhCong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `kick`
--

CREATE TABLE `kick` (
  `MaNguoiBiKick` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `motasp`
--

CREATE TABLE `motasp` (
  `id` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `MoTa` varchar(1500) COLLATE utf16_vietnamese_ci NOT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `motasp`
--

INSERT INTO `motasp` (`id`, `MaSP`, `MoTa`, `Time`) VALUES
(1, 1, 'Hàng còn mới 99%', '2018-06-04 02:31:15'),
(2, 1, 'Hàng còn nguyên hộp full box', '2018-06-04 02:31:30'),
(3, 1, 'Tất cả mọi thứ ok.<br>\r\nMua được thì mua ko thì thôi', '2018-06-05 02:49:56'),
(14, 19, 'Máy trang bị chip thế hế thứ 7 là Intel Kabylake i3 7130U 2.7 GHz và RAM DDR4 4 GB có thể nâng cấp tối đa 16 GB giúp máy đa nhiệm trơn tru. Ổ cứng đi kèm là SSD 128 GB khởi động nhanh và đạt độ ổn định rất cao.', '2018-06-18 15:24:32'),
(21, 20, '1', '2018-06-18 16:25:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL,
  `TenNguoiDung` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `LoaiNguoiDung` char(5) COLLATE utf16_vietnamese_ci NOT NULL,
  `DiemDanhGia` float DEFAULT '0',
  `MatKhau` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `DiaChi` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `Email` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `QuyenDangBan` char(5) COLLATE utf16_vietnamese_ci NOT NULL DEFAULT 'no',
  `isDelete` char(5) COLLATE utf16_vietnamese_ci NOT NULL,
  `isLogin` char(5) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`MaNguoiDung`, `TenNguoiDung`, `LoaiNguoiDung`, `DiemDanhGia`, `MatKhau`, `DiaChi`, `Email`, `QuyenDangBan`, `isDelete`, `isLogin`) VALUES
(1, 'admin', 'admin', 0, '123456', '', 'admin@admin', 'no', '', 'yes'),
(2, 'Trần thị mít', '', 0, '123', '', 'dsasad', 'no', '', ''),
(3, '123456', 'ban', 10, '123456', 'dasdsa', 'abc@xyzz', 'no', 'no', 'yes'),
(4, 'Leo', 'mua', 0, '123456', 'test', 'test@gmail.com', 'no', 'no', 'yes'),
(5, 'temp', 'ban', 10, '123456', 'sfdsafsa', 'abc@123', 'no', '', 'yes');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `MaSP` int(11) NOT NULL,
  `TenSP` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `GiaKhoiDiem` decimal(10,0) NOT NULL,
  `GiaMuaNgay` decimal(10,0) NOT NULL,
  `GiaHienTai` decimal(10,0) NOT NULL,
  `TimeDangSP` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TimeKetThuc` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ThuocDanhMuc` int(11) NOT NULL,
  `Hinh1` varchar(1500) COLLATE utf16_vietnamese_ci NOT NULL,
  `Hinh2` varchar(1500) COLLATE utf16_vietnamese_ci NOT NULL,
  `Hinh3` varchar(1500) COLLATE utf16_vietnamese_ci NOT NULL,
  `MaNguoiBan` int(11) NOT NULL,
  `BuocGia` decimal(10,0) NOT NULL,
  `isBidded` char(5) COLLATE utf16_vietnamese_ci NOT NULL,
  `isAutoExtend` char(5) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`MaSP`, `TenSP`, `GiaKhoiDiem`, `GiaMuaNgay`, `GiaHienTai`, `TimeDangSP`, `TimeKetThuc`, `ThuocDanhMuc`, `Hinh1`, `Hinh2`, `Hinh3`, `MaNguoiBan`, `BuocGia`, `isBidded`, `isAutoExtend`) VALUES
(1, 'Samsung Galaxy S9+', '2000000', '23490000', '3200000', '2018-06-01 06:35:23', '2018-06-08 00:35:40', 0, 'assets\\picture\\img3\\1-798x450.jpg', 'assets\\picture\\img3\\1-798x450.jpg', 'assets\\picture\\img3\\1-798x450.jpg', 4, '100000', '', ''),
(2, 'Apple Iphone X', '2000000', '29999999', '6000000', '0000-00-00 00:00:00', '2018-06-03 06:17:00', 0, 'assets\\picture\\img1\\2-180x125.png', 'assets\\picture\\img3\\2-800x450.jpg', 'assets\\picture\\img3\\2-800x450.jpg', 2, '0', '', ''),
(3, 'Sony Xperia XZ1', '2000000', '12990000', '8850000', '0000-00-00 00:00:00', '2018-06-01 11:36:56', 0, 'assets\\picture\\img1\\3-180x125.png', 'assets\\picture\\img3\\3-800x450.jpg', 'assets\\picture\\img3\\3-800x450.jpg', 1, '0', '', ''),
(4, 'Oppo Find F7 Plus', '2000000', '7990000', '4495000', '0000-00-00 00:00:00', '2018-06-09 14:28:00', 0, 'assets\\picture\\img1\\4-180x125.png', 'assets\\picture\\img3\\4-800x450.jpg', 'assets\\picture\\img3\\4-800x450.jpg', 1, '0', '', ''),
(5, 'Nokia 7 Plus', '2000000', '8990000', '3256020', '0000-00-00 00:00:00', '2018-06-06 06:25:00', 0, 'assets\\picture\\img1\\5-180x125.png', 'assets\\picture\\img3\\5-800x450.jpg', 'assets\\picture\\img3\\5-800x450.jpg', 1, '0', '', ''),
(19, 'Lenovo', '500000', '8990000', '0', '2018-06-18 10:24:25', '2018-06-18 16:59:00', 0, 'https://www.thegioididong.com/images/44/139349/lenovo-ideapad-320-15ikbn-i3-7130u-80xl03snvn-1.jpg', 'https://www.thegioididong.com/images/44/139349/lenovo-ideapad-320-15ikbn-i3-7130u-80xl03snvn-2.jpg', 'https://www.thegioididong.com/images/44/139349/lenovo-ideapad-320-15ikbn-i3-7130u-80xl03snvn-4.jpg', 5, '200000', '', 'yes');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `yeucaudangban`
--

CREATE TABLE `yeucaudangban` (
  `id` int(11) NOT NULL,
  `MaNguoiYeuCau` int(11) DEFAULT NULL,
  `MaNguoiDuyet` int(11) NOT NULL,
  `ThoiGianYeuCau` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isApproved` char(5) COLLATE utf16_vietnamese_ci NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `yeucaudangban`
--

INSERT INTO `yeucaudangban` (`id`, `MaNguoiYeuCau`, `MaNguoiDuyet`, `ThoiGianYeuCau`, `isApproved`) VALUES
(42, 4, 0, '2018-06-16 13:08:23', 'no'),
(43, 3, 0, '2018-06-18 14:26:42', 'no');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`MaNguoiDanhGia`,`MaSP`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`MaDM`);

--
-- Chỉ mục cho bảng `danhsachyeuthich`
--
ALTER TABLE `danhsachyeuthich`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `daugia`
--
ALTER TABLE `daugia`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `giatudong`
--
ALTER TABLE `giatudong`
  ADD PRIMARY KEY (`MaSP`,`MaNguoiMua`);

--
-- Chỉ mục cho bảng `ketquadaugia`
--
ALTER TABLE `ketquadaugia`
  ADD PRIMARY KEY (`MaSP`,`MaNguoiDauThanhCong`);

--
-- Chỉ mục cho bảng `kick`
--
ALTER TABLE `kick`
  ADD PRIMARY KEY (`MaNguoiBiKick`,`MaSP`);

--
-- Chỉ mục cho bảng `motasp`
--
ALTER TABLE `motasp`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`MaSP`);

--
-- Chỉ mục cho bảng `yeucaudangban`
--
ALTER TABLE `yeucaudangban`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `MaDM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `danhsachyeuthich`
--
ALTER TABLE `danhsachyeuthich`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `daugia`
--
ALTER TABLE `daugia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT cho bảng `motasp`
--
ALTER TABLE `motasp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `MaSP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `yeucaudangban`
--
ALTER TABLE `yeucaudangban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
