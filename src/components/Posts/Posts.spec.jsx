import { Posts } from '.';

const { render, screen } = require("@testing-library/react");

const props = {
    posts: [
      {
        id: 1,
        title: 'title 1',
        body: 'body 1',
        cover: 'img/img.png' 
      },
      {
        id: 2,
        title: 'title 2',
        body: 'body 2',
        cover: 'img/img.png' 
      },
      {
        id: 3,
        title: 'title 3',
        body: 'body 3',
        cover: 'img/img.png' 
      },
    ]
};

describe('<Posts />', () =>{
    it('should render posts', () => {
      render(<Posts {...props}/>) 

			expect(screen.getByRole('heading', {name: /title/i})).toHaveLength(3);
    });
});