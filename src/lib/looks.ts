export type Look = {
  id: number;
  title: string;
  description: string;
  season: string;
  image: string;
  span?: "wide" | "tall" | "normal";
};

export const looks: Look[] = [
  {
    id: 1,
    title: "Ансамбъл I",
    description: "Структурирано сако, мерино риза, памучен панталон",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0X1MRy2ta6lh_LMqj54vfzp3UNSi-NPXw7t_y8uDI0IR3yqsyE0OeWNPBlkV5AzJUBhkA64Vur_OOyDpEbsuOsu8cXc_-zFuz11ucnwmfjSMw1mLNFVqJc6CZZVycOcpzPXRaor62DPmMVouT0FBkw2ch7GhsPTeuIyki_cFEzNBDmHoYPW5kbvEFrVTQ4D6p8bFGQ0KovQz6wP4xi6bK8hCWsanNzmroS1sGhudVo0UjSG_g6vXu6gxHArZWHr0Ry1WeEYjQ-oA",
    span: "tall",
  },
  {
    id: 2,
    title: "Ансамбъл II",
    description: "Мерино вълнена риза, Chelsea обувки",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9cGAzPhXD6WS1dMZ8h4VohNJzcfQDho4owBQJ7zaIO5rye4UMCc-Pa8X_OFJoCbuKH7vcFeCAGVuC2mUcgL93vBosMLExO_XSEYFC7-tpYaHP_IZgZsnGy8lNKCYnCp_hrgFqsJwRZnB55iqPAJpj3aSgUfiCSREJDONGxhTTPwBbtKycTZy9CIjXA4IG2GDQDHW_kX5rubLXXL9psHPhv1LzHm8KPoiVWGIIXwsh3K9tY4OVRyHHa1AMTzKsRcyiPaMZUpxzuP8",
    span: "normal",
  },
  {
    id: 3,
    title: "Ансамбъл III",
    description: "Италиански памучен панталон, класическа риза",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzaf6rb8Lk7_5GPIt0MZWnMmRJUdXgW8B_Vc8ufdetIZfQyWQpyQ0HJxuF_cZI-SWoqrSTW4PvvDmkYF1y8GJWmE3U9Eztfr0HXRxn9FNv1g1ITdq1LGomzOWUobXeHV5BJMBfrh3njjb8qwqTXrr_FNucQI9Yj9Pyu1hLDM-khkVJ1jYpSKOcZOIkeQYAVdWaHLCSWtmAKJqmcgxSulwWU7MrDYTwDTy6w9b5wtArLCtqwu6dwMYnZClFxOjisIBljx34NTmWAM",
    span: "normal",
  },
  {
    id: 4,
    title: "Ансамбъл IV",
    description: "Вълнено сако, кожени Chelsea обувки",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdp-QTyxNx8qf5HpaAANvxfTgX4sV7mFSFy7yAebXdOTPZ534FpUn74IuG9i9KEf1Rb2xHmiKmdz_bNKVytpjlItfxfTLvqqIHmG_1ER8wmyVNRbB7M0otvTZHNr1JC4Ia2IIR1mBVz5zTM3immLBGVJA2hLAkX1zgBTuAKEL1u1Kv5eyAK66WZNxBnuTRl8NcffySVKAV6gX70F_CACNa94vqzkbzZhx5ONpLOqE926WvHKAJIsuepInnh-ilMXBD6ItIUcN0NEA",
    span: "wide",
  },
  {
    id: 5,
    title: "Ансамбъл V",
    description: "Слоеста визия — палто, мерино, панталон",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1RXUO5hUXGJ5tAdBk04qikKxH9uadWyaw5-Iofbc1_sHlR1mtLdtvF2OFQL-JxbzlIn1yOTBcWumKlYdiyCMa-ZiKKVbbG1dMhe5DNamQF11zksIyxNag8YBuZZKIXkviCvtsRp3bevBl0RT8bu-yBRZqwgRj6Zdzj83ba6VnKLXxgXVf3734tjYQ7jsQ4-pFC6-m0ESiqtyB_ahEQKOozyBqQu5VVxFvgvRLpFn5mC5OoEZWuhVoQR6q9JnnHIt-LPMJwl12qHM",
    span: "tall",
  },
  {
    id: 6,
    title: "Ансамбъл VI",
    description: "Детайл — качество на материята",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Ol9e1NY3uruHTAkdKjEHNvpqGz7gY0-VvhGw_KQ9IQOMyevPMlzR96A99aSzABx0sOM5Okl8fz2vWJuSsQo4c5AhGhCeB1GnDI2eh-HiaKxHafEwb-fO6xpGAhCMmXhBSKeQCbuqa10NQ8NWpH0SlQbKEWuXD6UmU9ir62qI5-gsuo2dT97fsTsFuKa9g7tQD3dfLoTEkvOawaJMPcu9Y_eRvhbjvwl_fgddjso0YgyZFFMgZCNsIHedHVAMiNU-tx11YuuucoNE",
    span: "normal",
  },
  {
    id: 7,
    title: "Ансамбъл VII",
    description: "Кожени Chelsea обувки — финален акцент",
    season: "Пролет / Лято 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYAj-mshc8bkUBaXyvOxWx1CeNyO1wj0s4PS1GT6i4qRGFvssKu3y-byczTlFDs1z46TevjYD0c-X9JQBkvObqSJq5ngHU7RMmLiHlWpnXDZRm7Y56-5cKnZN1JK9qhNImbQGeaP0HWrvGEmm1hTst9OLX_covs7UlDuKjaY4KMGuhwWObw_pGt6K0B6EybaT0eU3-ijIqsoKaLf1fdkgcqHexCfsYuWKGPWF9oPXI33DhIbhJC4omFGw9supHadCZAHl9sNtiOy0",
    span: "normal",
  },
];
