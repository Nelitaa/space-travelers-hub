import React from 'react';
import Rocket from '../components/Rocket';

const Rockets = () => (
  <section>
    <h1>Rockets</h1>
    <ul>
      <Rocket name="Falcon 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat ex magna, non luctus eros ullamcorper eu. Nulla tempus est vel ante imperdiet, eu cursus leo pharetra. In ac tellus sapien. In sit amet dolor sit amet odio varius aliquam at at nibh. In hac habitasse platea dictumst. Sed id finibus augue, id fermentum eros. Duis fringilla, justo eget mattis aliquet, lacus nibh blandit turpis, at ultrices nibh libero nec turpis. Curabitur aliquam ullamcorper sodales. Duis id quam et odio tincidunt porta." image="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" />
      <Rocket name="Falcon 9" description="Phasellus vitae vulputate arcu. Sed gravida at lacus quis bibendum. Donec imperdiet euismod elementum. Praesent semper, purus ac consequat rutrum, risus lectus porttitor nibh, eget rhoncus est turpis sed velit. Phasellus fermentum gravida leo vitae laoreet. Quisque congue pulvinar laoreet. Morbi nec orci eros. Aenean ornare malesuada mi, vel varius massa rhoncus eu. Nullam ligula felis, ullamcorper id enim sed, scelerisque tincidunt velit. Nulla porta sem eu lectus ullamcorper tincidunt." image="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" />
      <Rocket name="Falcon Heavy" description="Phasellus semper, diam eget laoreet porttitor, sapien arcu lobortis eros, sit amet consequat nulla ante vel arcu. Proin vestibulum dui ac nulla egestas molestie. Donec pharetra orci lacus, a gravida risus pellentesque sodales. Maecenas nec massa ullamcorper, maximus augue eu, aliquet magna. Sed fermentum sit amet erat vel egestas. Aenean interdum, leo a semper mattis, lorem nisl commodo ligula, in lobortis turpis tellus nec magna." image="https://images2.imgbox.com/3d/86/cnu0pan8_o.png" />
    </ul>
  </section>
);

export default Rockets;
