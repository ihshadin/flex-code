
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import './Editor.css'; 
import Split from 'react-split'
const Editor = () => {
    return (
        
            <div className="w-full h-full border-2 border-white">
            <Split className='h-[calc(90vh-94px)] flex flex-row ' direction='horizontal' sizes={[40, 60]} minSize={0}
             expandToMin={false}
             gutterSize={10}
             gutterAlign="center"
             snapOffset={30}
             dragInterval={1}
             cursor="col-resize">
        <div className=" overflow-auto">
        <p className="p-5"> !</p>
        </div>
        <div className="overflow-hidden h-full flex flex-col">
           <Split className='flex flex-col h-[calc(90vh-94px)]' direction='vertical' sizes={[70, 30]} minSize={0}
             expandToMin={false}
             gutterSize={10}
             gutterAlign="center"
             snapOffset={0}
             dragInterval={1}
             cursor="col-resize">
                 <div className="overflow-hidden">
                      <div className="p-2 w-full overflow-auto">
                      <CodeMirror
						value="const i = 0;
function sakib (tar, get){
// write your code here ....
}"
						theme={vscodeDark}
						extensions={[javascript()]}
						style={{ fontSize: 16 }}
					/>
                      </div>
                 </div>
                 <div className="overflow-hidden">
                 <p className="p-5"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nisi neque nobis expedita rerum consectetur corporis velit assumenda quidem, earum facilis hic impedit nam culpa natus sequi incidunt nemo nesciunt, maxime ad odit ut animi aut excepturi! Laudantium rerum totam sequi facilis commodi, deleniti ab asperiores voluptas quae inventore magni delectus tempore consequatur dolorum id soluta quo labore reiciendis. Suscipit aperiam voluptatibus quia omnis vero animi, nostrum dignissimos at est? Quo ipsam rem a asperiores? Reiciendis corporis vero quia, natus animi ab sunt molestias architecto necessitatibus ducimus aliquid doloribus. Esse impedit, mollitia eius blanditiis perspiciatis unde expedita. Quisquam, quos aspernatur!</p>
                 </div>
                 
             </Split>
        </div>
        </Split>
            </div>
    );
};
export default Editor;