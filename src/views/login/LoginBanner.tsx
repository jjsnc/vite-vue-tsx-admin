import { defineComponent, computed } from "vue";
import { useI18n } from 'vue-i18n'
import { Carousel } from '@arco-design/web-vue'
export default defineComponent({
    name: 'loginBanner',
    setup() {
        const { t } = useI18n();

        const dataList = computed(() => [
            {
                slogan: t('login.banner.slogan3'),
                subSlogan: t('login.banner.subSlogan3'),
                image:
                    'https://cdn.jsdelivr.net/gh/manyuemeiquqi/my-image-bed/dist/%E8%BD%AE%E6%92%AD%E5%9B%BE.png'
            },
            {
                slogan: t('login.banner.slogan1'),
                subSlogan: t('login.banner.subSlogan1'),
                image:
                    'https://cdn.jsdelivr.net/gh/manyuemeiquqi/my-image-bed/dist/%E8%BD%AE%E6%92%AD%E5%9B%BE.png'
            },
            {
                slogan: t('login.banner.slogan2'),
                subSlogan: t('login.banner.subSlogan2'),
                image:
                    'https://cdn.jsdelivr.net/gh/manyuemeiquqi/my-image-bed/dist/%E8%BD%AE%E6%92%AD%E5%9B%BE.png'
            }
        ])
        return () => (
            <Carousel class="h-full" animationName="fade">

            </Carousel>
        )
    }
})