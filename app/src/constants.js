export const VESSEL_INIT = 'VESSEL_INIT';
export const SHOW_LOADING = 'SHOW_LOADING';
export const GET_SERIESGROUP = 'GET_SERIESGROUP';
export const SET_LAYERS = 'SET_LAYERS';
export const TOGGLE_LAYER_VISIBILITY = 'TOGGLE_LAYER_VISIBILITY';
export const SET_ZOOM = 'SET_ZOOM';
export const SET_CENTER = 'SET_CENTER';
export const SET_TIMELINE_DATES = 'SET_TIMELINE_DATES';

// User actions
export const GET_USER = 'GET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';
export const TOKEN_SESSION = 'TOKEN_SESSION';

export const GET_RECENT_POST = 'GET_RECENT_POST';

// Filters actions
export const UPDATE_FILTERS = 'UPDATE_FILTERS';

// Application settings
export const TIMELINE_STEP = 24 * 60 * 60 * 1000; // 1 day

export const TIMELINE_MIN_DATE = 1420070400000; // 01/01/2015
export const TIMELINE_MAX_DATE = 1451516400000; // 31/12/2015

export const TIMELINE_DEFAULT_START_DATE = 1420070400000; // 01/01/2015
export const TIMELINE_DEFAULT_END_DATE = 1451516400000; // 31/12/2015

export const MIN_ZOOM_LEVEL = 2;
export const MAX_ZOOM_LEVEL = 12;

export const FLAGS = {
  1: 'ad.png',
  2: 'ae.png',
  3: 'af.png',
  4: 'ag.png',
  5: 'ai.png',
  6: 'al.png',
  7: 'am.png',
  8: 'an.png',
  9: 'ao.png',
  10: 'ar.png',
  11: 'as.png',
  12: 'at.png',
  13: 'au.png',
  14: 'aw.png',
  15: 'ax.png',
  16: 'az.png',
  17: 'ba.png',
  18: 'bb.png',
  19: 'bd.png',
  20: 'be.png',
  21: 'bf.png',
  22: 'bg.png',
  23: 'bh.png',
  24: 'bi.png',
  25: 'bj.png',
  26: 'bm.png',
  27: 'bn.png',
  28: 'bo.png',
  29: 'br.png',
  30: 'bs.png',
  31: 'bt.png',
  32: 'bv.png',
  33: 'bw.png',
  34: 'by.png',
  35: 'bz.png',
  36: 'ca.png',
  37: 'catalonia.png',
  38: 'cc.png',
  39: 'cd.png',
  40: 'cf.png',
  41: 'cg.png',
  42: 'ch.png',
  43: 'ci.png',
  44: 'ck.png',
  45: 'cl.png',
  46: 'cm.png',
  47: 'cn.png',
  48: 'co.png',
  49: 'cr.png',
  50: 'cs.png',
  51: 'cu.png',
  52: 'cv.png',
  53: 'cx.png',
  54: 'cy.png',
  55: 'cz.png',
  56: 'de.png',
  57: 'dj.png',
  58: 'dk.png',
  59: 'dm.png',
  60: 'do.png',
  61: 'dz.png',
  62: 'ec.png',
  63: 'ee.png',
  64: 'eg.png',
  65: 'eh.png',
  66: 'england.png',
  67: 'er.png',
  68: 'es.png',
  69: 'et.png',
  70: 'europeanunion.png',
  71: 'fam.png',
  72: 'fi.png',
  73: 'fj.png',
  74: 'fk.png',
  75: 'fm.png',
  76: 'fo.png',
  77: 'fr.png',
  78: 'ga.png',
  79: 'gb.png',
  80: 'gd.png',
  81: 'ge.png',
  82: 'gf.png',
  83: 'gh.png',
  84: 'gi.png',
  85: 'gl.png',
  86: 'gm.png',
  87: 'gn.png',
  88: 'gp.png',
  89: 'gq.png',
  90: 'gr.png',
  91: 'gs.png',
  92: 'gt.png',
  93: 'gu.png',
  94: 'gw.png',
  95: 'gy.png',
  96: 'hk.png',
  97: 'hm.png',
  98: 'hn.png',
  99: 'hr.png',
  100: 'ht.png',
  101: 'hu.png',
  102: 'id.png',
  103: 'ie.png',
  104: 'il.png',
  105: 'in.png',
  106: 'io.png',
  107: 'iq.png',
  108: 'ir.png',
  109: 'is.png',
  110: 'it.png',
  111: 'jm.png',
  112: 'jo.png',
  113: 'jp.png',
  114: 'ke.png',
  115: 'kg.png',
  116: 'kh.png',
  117: 'ki.png',
  118: 'km.png',
  119: 'kn.png',
  120: 'kp.png',
  121: 'kr.png',
  122: 'kw.png',
  123: 'ky.png',
  124: 'kz.png',
  125: 'la.png',
  126: 'lb.png',
  127: 'lc.png',
  128: 'li.png',
  129: 'lk.png',
  130: 'lr.png',
  131: 'ls.png',
  132: 'lt.png',
  133: 'lu.png',
  134: 'lv.png',
  135: 'ly.png',
  136: 'ma.png',
  137: 'mc.png',
  138: 'md.png',
  139: 'me.png',
  140: 'mg.png',
  141: 'mh.png',
  142: 'mk.png',
  143: 'ml.png',
  144: 'mm.png',
  145: 'mn.png',
  146: 'mo.png',
  147: 'mp.png',
  148: 'mq.png',
  149: 'mr.png',
  150: 'ms.png',
  151: 'mt.png',
  152: 'mu.png',
  153: 'mv.png',
  154: 'mw.png',
  155: 'mx.png',
  156: 'my.png',
  157: 'mz.png',
  158: 'na.png',
  159: 'nc.png',
  160: 'ne.png',
  161: 'nf.png',
  162: 'ng.png',
  163: 'ni.png',
  164: 'nl.png',
  165: 'no.png',
  166: 'np.png',
  167: 'nr.png',
  168: 'nu.png',
  169: 'nz.png',
  170: 'om.png',
  171: 'pa.png',
  172: 'pe.png',
  173: 'pf.png',
  174: 'pg.png',
  175: 'ph.png',
  176: 'pk.png',
  177: 'pl.png',
  178: 'pm.png',
  179: 'pn.png',
  180: 'pr.png',
  181: 'ps.png',
  182: 'pt.png',
  183: 'pw.png',
  184: 'py.png',
  185: 'qa.png',
  186: 're.png',
  187: 'ro.png',
  188: 'rs.png',
  189: 'ru.png',
  190: 'rw.png',
  191: 'sa.png',
  192: 'sb.png',
  193: 'scotland.png',
  194: 'sc.png',
  195: 'sd.png',
  196: 'se.png',
  197: 'sg.png',
  198: 'sh.png',
  199: 'si.png',
  200: 'sj.png',
  201: 'sk.png',
  202: 'sl.png',
  203: 'sm.png',
  204: 'sn.png',
  205: 'so.png',
  206: 'sr.png',
  207: 'st.png',
  208: 'sv.png',
  209: 'sy.png',
  210: 'sz.png',
  211: 'tc.png',
  212: 'td.png',
  213: 'tf.png',
  214: 'tg.png',
  215: 'th.png',
  216: 'tj.png',
  217: 'tk.png',
  218: 'tl.png',
  219: 'tm.png',
  220: 'tn.png',
  221: 'to.png',
  222: 'tr.png',
  223: 'tt.png',
  224: 'tv.png',
  225: 'tw.png',
  226: 'tz.png',
  227: 'ua.png',
  228: 'ug.png',
  229: 'um.png',
  230: 'us.png',
  231: 'uy.png',
  232: 'uz.png',
  233: 'va.png',
  234: 'vc.png',
  235: 've.png',
  236: 'vg.png',
  237: 'vi.png',
  238: 'vn.png',
  239: 'vu.png',
  240: 'wales.png',
  241: 'wf.png',
  242: 'ws.png',
  243: 'ye.png',
  244: 'yt.png',
  245: 'za.png',
  246: 'zm.png',
  247: 'zw.png',
};
