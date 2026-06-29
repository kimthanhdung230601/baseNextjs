export const ROUTE_PATHS = {
  ROOT: "/",
  TELECOMMUNICATIONS: "/doanh-nghiep/vien-thong",
  INFORMATION_TECHNOLOGY: "/doanh-nghiep/cong-nghe-thong-tin",
  TRANSMISSION_BROADBAND: "/doanh-nghiep/truyen-dan-bang-thong",
  DICH_VU_DI_DONG: "/dich-vu-di-dong",
  LOAI_THUE_BAO: "/dich-vu-di-dong/loai-thue-bao",
  GOI_CUOC: "/dich-vu-di-dong/goi-cuoc",
  DICH_VU: "/dich-vu-di-dong/dich-vu",
  DANG_KY_HOA_MANG: "/dich-vu-di-dong/dang-ky-hoa-mang",
  DICH_VU_QUOC_TE: "/dich-vu-di-dong/dich-vu-quoc-te",
  ESIM: "/dich-vu-di-dong/eSim",
  HO_TRO_KHACH_HANG: "/ho-tro-khach-hang",
  KET_NOI_DAI_LAU: "/ho-tro-khach-hang/ket-noi-dai-lau",
  CAU_HOI_THUONG_GAP: "/ho-tro-khach-hang/cau-hoi-thuong-gap",
  TIM_KIEM_CUA_HANG: "/ho-tro-khach-hang/tim-kiem-cua-hang",
  CHUYEN_MANG_GIU_SO: "/ho-tro-khach-hang/chuyen-mang-giu-so",
  GUI_PHAN_ANH: "/ho-tro-khach-hang/gui-phan-anh",
  KHUYEN_MAI: "/khuyen-mai",
  TIN_KHUYEN_MAI: "/khuyen-mai/tin-khuyen-mai",
  THONG_TIN_TRUNG_THUONG: "/khuyen-mai/thong-tin-trung-thuong",
  TRA_CUU_MA_GIAI_THUONG: "/khuyen-mai/tra-cuu-ma-giai-thuong",
  MY_MOBIFONE: "/my-mobifone",
  TAI_KHOAN: "/my-mobifone/tai-khoan",
  THONG_TIN_TAI_KHOAN: "/my-mobifone/tai-khoan/thong-tin-tai-khoan",
  THONG_TIN_CA_NHAN: "/my-mobifone/tai-khoan/thong-tin-ca-nhan",
  DANG_KY_THONG_TIN: "/my-mobifone/tai-khoan/dang-ky-thong-tin",
  LICH_SU_MYPOINT: "/my-mobifone/tai-khoan/lich-su-mypoint",
  QUAN_LY_THIET_BI_FWA: "/my-mobifone/tai-khoan/quan-ly-thiet-bi-fwa",
  TIEN_ICH: "/my-mobifone/tien-ich",
  NAP_TIEN: "/my-mobifone/tien-ich/nap-tien",
  THANH_TOAN_NGAN_HANG: "/my-mobifone/tien-ich/thanh-toan-ngan-hang",
  AUTOPAY: "/my-mobifone/tien-ich/autopay",
  MOBIFONE_ONLINE: "/my-mobifone/tien-ich/mobifone-online",
  UU_DAI_MYPOINT: "/my-mobifone/tien-ich/uu-dai-mypoint",
  MOBIFIBER: "/my-mobifone/tien-ich/mobifiber",
  CUOC: "/my-mobifone/cuoc",
  TRA_CUOC: "/my-mobifone/cuoc/tra-cuoc",
  LICH_SU_NAP_TIEN: "/my-mobifone/cuoc/lich-su-nap-tien",
  LICH_SU_THANH_TOAN_APP: "/my-mobifone/cuoc/lich-su-thanh-toan-app",
  HOA_DON_BAN_HANG: "/my-mobifone/cuoc/hoa-don-ban-hang",
  TUYEN_DUNG: "/tuyen-dung",
  FIVE_G_MOBIFONE_PAGE: "/personal/5g-mobifone",
  FIVE_G_MOBIFONE: "https://5g.mobifone.vn",
  AUTH_ROOT: "/auth",
  AUTH_PREFIX: "/auth/",
  AUTH_LOGIN: "/auth/login",
  AUTH_REGISTER: "/auth/register",
  ADMIN_ROOT: "/admin",
} as const;

const BUSINESS_ROUTES = {
  TELECOMMUNICATIONS: ROUTE_PATHS.TELECOMMUNICATIONS,
  INFORMATION_TECHNOLOGY: ROUTE_PATHS.INFORMATION_TECHNOLOGY,
  TRANSMISSION_BROADBAND: ROUTE_PATHS.TRANSMISSION_BROADBAND,
} as const;

const PERSONAL_ROUTES = {
  MOBILE_SERVICES: {
    ROOT: ROUTE_PATHS.ROOT,
    SUBSCRIBER_TYPES: ROUTE_PATHS.LOAI_THUE_BAO,
    PACKAGES: ROUTE_PATHS.GOI_CUOC,
    SERVICES: ROUTE_PATHS.DICH_VU,
    REGISTER_NETWORK: ROUTE_PATHS.DANG_KY_HOA_MANG,
    INTERNATIONAL_SERVICES: ROUTE_PATHS.DICH_VU_QUOC_TE,
    ESIM: ROUTE_PATHS.ESIM,
  },
  CUSTOMER_SUPPORT: {
    ROOT: ROUTE_PATHS.HO_TRO_KHACH_HANG,
    LONG_TERM_CONNECTION: ROUTE_PATHS.KET_NOI_DAI_LAU,
    FAQ: ROUTE_PATHS.CAU_HOI_THUONG_GAP,
    SEARCH_STORE: ROUTE_PATHS.TIM_KIEM_CUA_HANG,
    NUMBER_PORTABILITY: ROUTE_PATHS.CHUYEN_MANG_GIU_SO,
    SEND_FEEDBACK: ROUTE_PATHS.GUI_PHAN_ANH,
  },
  PROMOTIONS: {
    ROOT: ROUTE_PATHS.KHUYEN_MAI,
    PROMOTION_NEWS: ROUTE_PATHS.TIN_KHUYEN_MAI,
    PRIZE_INFORMATION: ROUTE_PATHS.THONG_TIN_TRUNG_THUONG,
    SEARCH_PRIZE: ROUTE_PATHS.TRA_CUU_MA_GIAI_THUONG,
  },
  MY_MOBIFONE: {
    ROOT: ROUTE_PATHS.MY_MOBIFONE,
    ACCOUNT_INFORMATION: {
      ROOT: ROUTE_PATHS.TAI_KHOAN,
      ACCOUNT_INFO: ROUTE_PATHS.THONG_TIN_TAI_KHOAN,
      ACCOUNT_DETAILS: ROUTE_PATHS.THONG_TIN_CA_NHAN,
      REGISTER_INFO: ROUTE_PATHS.DANG_KY_THONG_TIN,
      MYPOINT_USAGE: ROUTE_PATHS.LICH_SU_MYPOINT,
      FWA_MANAGEMENT: ROUTE_PATHS.QUAN_LY_THIET_BI_FWA,
    },
    BENEFITS: {
      ROOT: ROUTE_PATHS.TIEN_ICH,
      TOPUP: ROUTE_PATHS.NAP_TIEN,
      BANK_TRANSFER: ROUTE_PATHS.THANH_TOAN_NGAN_HANG,
      AUTOPAY: ROUTE_PATHS.AUTOPAY,
      MOBIFONE_ONLINE: ROUTE_PATHS.MOBIFONE_ONLINE,
      MYPOINT_BENEFIT: ROUTE_PATHS.UU_DAI_MYPOINT,
      MOBIFIBER: ROUTE_PATHS.MOBIFIBER,
    },
    BILLS: {
      ROOT: ROUTE_PATHS.CUOC,
      BILL_INQUIRY: ROUTE_PATHS.TRA_CUOC,
      BILL_HISTORY: ROUTE_PATHS.LICH_SU_NAP_TIEN,
      BILL_WEB_APP: ROUTE_PATHS.LICH_SU_THANH_TOAN_APP,
      BILL_INVOICE: ROUTE_PATHS.HOA_DON_BAN_HANG,
    },
  },
  RECRUITMENT: ROUTE_PATHS.TUYEN_DUNG,
  FIVE_G_MOBIFONE_PAGE: ROUTE_PATHS.FIVE_G_MOBIFONE_PAGE,
  FIVE_G_MOBIFONE: ROUTE_PATHS.FIVE_G_MOBIFONE,
} as const;

const AUTH_ROUTES = {
  ROOT: ROUTE_PATHS.AUTH_ROOT,
  PREFIX: ROUTE_PATHS.AUTH_PREFIX,
  LOGIN: ROUTE_PATHS.AUTH_LOGIN,
  REGISTER: ROUTE_PATHS.AUTH_REGISTER,
} as const;

const SYSTEM_ROUTES = {
  ADMIN_ROOT: ROUTE_PATHS.ADMIN_ROOT,
} as const;

export const ROUTES = {
  SYSTEM: SYSTEM_ROUTES,
  BUSINESS: BUSINESS_ROUTES,
  PERSONAL: PERSONAL_ROUTES,
  AUTH: AUTH_ROUTES,
} as const;

export type RouteKey = keyof typeof ROUTE_PATHS;

export default ROUTES;
