const { Post } = require('../models');

const postData = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        post_content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        user_id: 3
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_url: 'https://nasa.gov/donec.json',
        post_content: 'Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate',
        user_id: 1
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        post_content: 'Ut etiam sit amet nisl purus in mollis.',
        user_id: 2

    },
    {
        title: 'Nunc purus.',
        post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
        post_content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 5
    },
    {
        title: 'Pellentesque eget nunc.',
        post_url: 'http://google.ca/nam/nulla/integer.aspx',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;