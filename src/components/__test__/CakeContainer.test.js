import renderer from 'react-test-renderer'
import CakeHook from '../CakeHook'

test('snapshot',()=>{
    const tree= renderer.create(<CakeHook/>).toJSON()
    expext(tree).toMatchSnapshot()
})