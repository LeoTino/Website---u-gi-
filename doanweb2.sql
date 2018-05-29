-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 29, 2018 lúc 06:15 PM
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `MaDM` int(11) NOT NULL,
  `TenDM` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachyeuthich`
--

CREATE TABLE `danhsachyeuthich` (
  `MaSP` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daugia`
--

CREATE TABLE `daugia` (
  `MaNguoiDau` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `ThoiGianDauGia` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `GiaDau` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

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
  `MaSP` int(11) NOT NULL,
  `MoTa` varchar(1500) COLLATE utf16_vietnamese_ci NOT NULL,
  `Time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL,
  `TenNguoiDung` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `LoaiNguoiDung` char(5) COLLATE utf16_vietnamese_ci NOT NULL,
  `DiemDanhGia` float NOT NULL,
  `Username` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `Password` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `DiaChi` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `Email` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `TimeQuyenDangBan` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `isDelete` char(5) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `MaSP` int(11) NOT NULL,
  `TenSP` varchar(200) COLLATE utf16_vietnamese_ci NOT NULL,
  `GiaKhoiDiem` decimal(10,0) NOT NULL,
  `GiaMuaNgay` decimal(10,0) NOT NULL,
  `TimeDangSP` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `yeucaudangban`
--

CREATE TABLE `yeucaudangban` (
  `MaNguoiYeuCau` int(11) NOT NULL,
  `MaNguoiDuyet` int(11) NOT NULL,
  `ThoiGianYeuCau` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `isApproved` char(5) COLLATE utf16_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_vietnamese_ci;

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
  ADD PRIMARY KEY (`MaSP`,`MaNguoiDung`);

--
-- Chỉ mục cho bảng `daugia`
--
ALTER TABLE `daugia`
  ADD PRIMARY KEY (`MaNguoiDau`);

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
  ADD PRIMARY KEY (`MaSP`);

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
  ADD PRIMARY KEY (`MaNguoiYeuCau`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `MaDM` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `MaSP` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
