// config.js - കേന്ദ്രീകൃത Supabase കോൺഫിഗറേഷനും സൗദി ബിസിനസ്സ് തീയതിയും
window.GLOBAL_CONFIG = {
  supabaseUrl: 'https://elubqoicerkldrufqcbj.supabase.co',
  supabaseKey: 'sb_publishable_zsEKreCmounELozZ5EQ3Lg_aXyut9EK'
};

// സൗദി സമയം രാവിലെ 6:00 മണിക്ക് തീയതി മാറുന്ന ഫംഗ്ഷൻ (എല്ലാ ഫയലുകൾക്കും കോമൺ)
window.getSaudiBusinessDate = function() {
  const now = new Date();
  // സൗദി ടൈംസോണിൽ (Asia/Riyadh, UTC+3) സമയം കണക്കാക്കുന്നു
  const saudiTimeStr = now.toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
  const saudiDate = new Date(saudiTimeStr);

  // രാവിലെ 6 മണിക്ക് മുമ്പാണെങ്കിൽ (00:00 മുതൽ 05:59 വരെ) തലേ ദിവസത്തെ തീയതി നൽകുന്നു
  if (saudiDate.getHours() < 6) {
    saudiDate.setDate(saudiDate.getDate() - 1);
  }

  const year = saudiDate.getFullYear();
  const month = String(saudiDate.getMonth() + 1).padStart(2, '0');
  const day = String(saudiDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
