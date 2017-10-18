import Post from '../src/Post.vue'
import expect from 'expect'
import { mount } from 'vue-test-utils'

describe('demo', () => {
    it('should load the component', () => {
        //expect(Post).toBeTruthy();
        const wrapper = mount(Post, {
            propsData: {
                id: 1
            }
        })

        expect(wrapper.text()).toBe('1')

        wrapper.setProps({
            id: 2
        })

        expect(wrapper.text()).toBe('2')
    });
})