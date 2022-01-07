const listHelper = require('../utills/list_helper')

const blogs = [
    {
        _id: '5a422a851b54a676234d17f7',
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    },
    {
        _id: '5a422b3a1b54a676234d17f9',
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
        likes: 12,
        __v: 0
    },
    {
        _id: '5a422b891b54a676234d17fa',
        title: 'First class tests',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
        likes: 10,
        __v: 0
    },
    {
        _id: '5a422ba71b54a676234d17fb',
        title: 'TDD harms architecture',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
        likes: 0,
        __v: 0
    },
    {
        _id: '5a422bc61b54a676234d17fc',
        title: 'Type wars',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
        likes: 2,
        __v: 0
    }  
]

describe('helper function tests',()=>{
    test('should return 1',()=>{
        const result =listHelper.dummy([])
        expect(result).toBe(1)
    })
})

describe('blog manipulations',()=>{
    const sampleBlog=[
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('test one blog',()=>{
        expect(listHelper.totalLikes(sampleBlog)).toBe(5)
    })
    
    test('test multiple blog',()=>{
        expect(listHelper.totalLikes(blogs)).toBe(36)
    })

    test('blog with most likes',()=>{
        expect(listHelper.favoriteBlog(blogs)).toEqual(blogs[2])
    })
    test('author with most blogs',()=>{
        let answer={
            author: 'Robert C. Martin',
            blogs: 3
        }
        expect(listHelper.mostBlogs(blogs)).toEqual(answer)
    })

    test('author with most likes',()=>{
        let answer={
            author: 'Edsger W. Dijkstra',
            likes: 17
        }
        expect(listHelper.mostLikes(blogs)).toEqual(answer)
    })
})