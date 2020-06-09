import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
         <ApprovalCard >    
             <h4> Warning</h4>
             <p> Are you sure</p> 
             </ApprovalCard>
            <ApprovalCard >           
                <CommentDetail 
                    author="Samuel" 
                    timeAgo="Today at 4:54pm" 
                    comment="great!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard >     
            <CommentDetail 
                author="Johnd" 
                timeAgo="Today at 5:54pm" 
                comment="wow!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard >     
            <CommentDetail 
                author="Jack" 
                timeAgo="Yesterday at 6:54pm" 
                comment="wonderful!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
