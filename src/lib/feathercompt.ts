import * as VueBase from 'vue';

const comptbl = (ren: any) => {
  const { attrs, class: cls } = ren.props;
  if (attrs) {
    ren.props = attrs;
    ren.props.class = cls;
  }
  if (Array.isArray(ren.children)) {
    ren.children = ren.children.map((rem: any) => {
      return comptbl(rem);
    });
  }
  return ren;
}

export default function (Icon: any, size = "16") {
  const ren = Icon.render(VueBase.h, { props: { size }, data: {} });
  Icon.render = function () {
    return comptbl(ren);
  }
}