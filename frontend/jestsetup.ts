import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
(global as any).shallow = Enzyme.shallow;
(global as any).render = Enzyme.render;
(global as any).mount = Enzyme.mount;