// Config penyimpanan (Cloudflare Worker) - SITUS mamakeavif-star
// Satu Worker dipakai semua akun; data tiap akun dipisah lewat nama "account".
// system:'wbp' = situs ini memakai sistem login WBP (index.html satu halaman).
window.WB_STORE = {
  worker: 'https://steep-resonance-6a71.kjago7822.workers.dev',
  account: 'mamakeavif-star',
  system: 'wbp',
  bank: { prefix: 'wbp_bank__', field: 'bankBin', app: 'prediksi', pack: true, defaultLimit: 100 }
};
