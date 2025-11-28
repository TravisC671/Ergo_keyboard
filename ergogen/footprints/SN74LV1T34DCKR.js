module.exports = {
  params: {
    designator: "U",
    input: undefined,
    gnd: undefined,
    output: undefined,
    vcc: undefined,
    side: "B",
  },
  body: (p) => {
    const { def_neg, def_pos } =
      p.side == "F"
        ? { def_neg: "-", def_pos: "" }
        : { def_neg: "", def_pos: "-" };

    return `(footprint SOT65P210X110-5N (layer ${p.side}.Cu) (tedit 69126D87)
  (descr "")
  (attr smd)
	${p.at /* parametric position */}

  ${"" /* footprint reference */}
  (fp_text reference "${p.ref}" (at 0 -3.2 ${p.rot}) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value SOT65P210X110-5N (at 4.7024 1.9064 0) (layer ${p.side}.Fab)
    (effects (font (size 0.64 0.64) (thickness 0.15)))
  )
  (pad 1 smd roundrect (roundrect_rratio 0.125) (at ${def_neg}0.96 -0.65 ${
      p.rot
    }) (size 1.19 0.4) (layers ${p.side}.Cu ${p.side}.Mask ${
      p.side
    }.Paste) (solder_mask_margin 0.102))
  (pad 2 smd roundrect (roundrect_rratio 0.125) (at ${def_neg}0.96 0.0 ${
      p.rot
    }) (size 1.19 0.4) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) ${
      p.input
    } (solder_mask_margin 0.102))
  (pad 3 smd roundrect (roundrect_rratio 0.125) (at ${def_neg}0.96 0.65 ${
      p.rot
    }) (size 1.19 0.4) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) ${
      p.gnd
    } (solder_mask_margin 0.102))
  (pad 4 smd roundrect (roundrect_rratio 0.125) (at ${def_pos}0.96 0.65 ${
      p.rot
    }) (size 1.19 0.4) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) ${
      p.output
    } (solder_mask_margin 0.102))
  (pad 5 smd roundrect (roundrect_rratio 0.125) (at ${def_pos}0.96 -0.65 ${
      p.rot
    }) (size 1.19 0.4) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) ${
      p.vcc
    } (solder_mask_margin 0.102))
  (fp_line (start ${def_neg}0.625 1.0) (end ${def_neg}0.625 -1.0) (layer ${
      p.side
    }.Fab) (width 0.127))
  (fp_line (start ${def_neg}0.625 -1.0) (end ${def_pos}0.625 -1.0) (layer ${
      p.side
    }.Fab) (width 0.127))
  (fp_line (start ${def_pos}0.625 -1.0) (end ${def_pos}0.625 1.0) (layer ${
      p.side
    }.Fab) (width 0.127))
  (fp_line (start ${def_pos}0.625 1.0) (end ${def_neg}0.625 1.0) (layer ${
      p.side
    }.Fab) (width 0.127))
  (fp_line (start ${def_neg}0.625 -1.17) (end ${def_pos}0.625 -1.17) (layer ${
      p.side
    }.SilkS) (width ${def_pos}0.127))
  (fp_line (start ${def_pos}0.625 1.17) (end ${def_neg}0.625 1.17) (layer ${
      p.side
    }.SilkS) (width 0.127))
  (fp_line (start ${def_neg}1.81 1.33) (end ${def_neg}1.81 -1.33) (layer ${
      p.side
    }.CrtYd) (width 0.05))
  (fp_line (start ${def_neg}1.81 -1.33) (end ${def_pos}1.81 -1.33) (layer ${
      p.side
    }.CrtYd) (width 0.05))
  (fp_line (start ${def_pos}1.81 -1.33) (end ${def_pos}1.81 1.33) (layer ${
      p.side
    }.CrtYd) (width 0.05))
  (fp_line (start ${def_pos}1.81 1.33) (end ${def_neg}1.81 1.33) (layer ${
      p.side
    }.CrtYd) (width 0.05))
  (fp_circle (center ${def_neg}2.1 -0.65) (end ${def_neg}2.0 -0.65) (layer ${
      p.side
    }.Fab) (width 0.2))
  (fp_circle (center ${def_neg}2.1 -0.65) (end ${def_neg}2.0 -0.65) (layer ${
      p.side
    }.SilkS) (width 0.2))
)`;
  },
};
