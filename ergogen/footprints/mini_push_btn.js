/**434133025816 */

module.exports = {
  params: {
    designator: "SW",
    name: "",
    top_pads: false,
    flip_name: false,
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    return `
(footprint "SMD_025816_WRE" (version 20211014) (generator pcbnew)
  (layer "F.Cu")
  (tags "434133025816 ")
  (attr smd)
  ${p.at /* parametric position */}
    ${"" /* footprint reference */}
  (fp_text reference "${p.ref}" (at 0 -3.2) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user "${p.name}" (at 0 ${p.flip_name ? "" : "-"}3.2 ${
      p.rot
    }) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.2)))
  )
  (fp_line (start -2.0955 -0.7698) (end -2.0955 -1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.0955 -1.4302) (end -2.6035 -1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.6035 -1.4302) (end -2.6035 -0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.6035 -0.7698) (end -2.0955 -0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.0955 1.4302) (end -2.0955 0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.0955 0.7698) (end -2.6035 0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.6035 0.7698) (end -2.6035 1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.6035 1.4302) (end -2.0955 1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.0955 0.7698) (end 2.0955 1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.0955 1.4302) (end 2.6035 1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.6035 1.4302) (end 2.6035 0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.6035 0.7698) (end 2.0955 0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.0955 -1.4302) (end 2.0955 -0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.0955 -0.7698) (end 2.6035 -0.7698) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.6035 -0.7698) (end 2.6035 -1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.6035 -1.4302) (end 2.0955 -1.4302) (layer "F.Fab") (width 0.0254))
  (fp_line (start -1.369877 1.7272) (end 1.369877 1.7272) (layer "F.SilkS") (width 0.1524))
  (fp_line (start 2.2225 0.41166) (end 2.2225 -0.41166) (layer "F.SilkS") (width 0.1524))
  (fp_line (start 1.369877 -1.7272) (end -1.369877 -1.7272) (layer "F.SilkS") (width 0.1524))
  (fp_line (start -2.2225 -0.41166) (end -2.2225 0.41166) (layer "F.SilkS") (width 0.1524))
  (fp_line (start -2.0955 1.6002) (end 2.0955 1.6002) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.0955 1.6002) (end 2.0955 -1.6002) (layer "F.Fab") (width 0.0254))
  (fp_line (start 2.0955 -1.6002) (end -2.0955 -1.6002) (layer "F.Fab") (width 0.0254))
  (fp_line (start -2.0955 -1.6002) (end -2.0955 1.6002) (layer "F.Fab") (width 0.0254))
  (fp_arc (start 0.3048 -1.6002) (mid 0 -1.2954) (end -0.3048 -1.6002) (layer "F.Fab") (width 0.0254))
  (pad "1" smd rect (at -2.2606 -1.1) (size 1.397 0.7112) (layers "F.Cu" "F.Paste" "F.Mask") ${
    p.top_pads ? p.from : ""
  })
  (pad "3" smd rect (at -2.2606 1.1) (size 1.397 0.7112) (layers "F.Cu" "F.Paste" "F.Mask") ${
    p.top_pads ? p.to : ""
  })
  (pad "4" smd rect (at 2.2606 1.1) (size 1.397 0.7112) (layers "F.Cu" "F.Paste" "F.Mask") ${
    p.top_pads ? "" : p.from
  })
  (pad "2" smd rect (at 2.2606 -1.1) (size 1.397 0.7112) (layers "F.Cu" "F.Paste" "F.Mask") ${
    p.top_pads ? "" : p.to
  })
)
`;
  },
};
