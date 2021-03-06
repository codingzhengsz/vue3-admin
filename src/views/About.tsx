import { defineComponent } from 'vue';
import HelloWord from '../components/HelloWorld';
import Logo from '../assets/logo.png';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <h1>About</h1>
        <img src={Logo}/>
        <HelloWord msg="Martin"/>
      </>
    );
  }
});