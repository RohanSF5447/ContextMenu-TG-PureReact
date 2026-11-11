import{j as e}from"./index-CTAXdLKx.js";import{r as p}from"./index-D5jfS-9e.js";import{u as M,G as R,a as T,P as A,C as P,b as a}from"./useGridTheme-DwtHDbpG.js";import{u as v,a as b,b as y}from"./useContextMenu-CkEikGvQ.js";import{u as E,a as D}from"./useClipboard-a4M0YUfD.js";import"./client-Spw3EFno.js";import{u as j}from"./usePager-bZJQUBqI.js";import"./useToolbar-CwbE5079.js";const s=["Alice","Brian","Carla","Devon"],i=["Open","In Progress","Done"],S=()=>{var u,c;const d=[];let r=1;for(let t=0;t<8;t++){const g={id:r++,name:`Epic ${t+1}`,owner:s[t%s.length],effort:40+t*5,status:i[t%i.length],children:[]};for(let n=0;n<3;n++){const h={id:r++,name:`Story ${t+1}.${n+1}`,owner:s[(t+n)%s.length],effort:8+n,status:i[(t+n+1)%i.length],children:[]};for(let o=0;o<3;o++)(u=h.children)==null||u.push({id:r++,name:`Task ${t+1}.${n+1}.${o+1}`,owner:s[(t+n+o)%s.length],effort:1+o,status:i[(t+o)%i.length]});(c=g.children)==null||c.push(h)}d.push(g)}return d},k=S(),l=()=>{M("material");const d=p.useRef(null),r=p.useRef(null);r.current===null&&(r.current=S());const[u,c]=p.useState(0),t={TreeDataModule:T,EditModule:D,ContextMenuModule:y,ClipboardModule:E,PagerModule:j,AutoFitModule:b,ResizeModule:v},g=()=>{c(n=>n+1)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid Context Menu - Nested Children Mode"}),e.jsxs("p",{children:["Right-click a tree row for ",e.jsx("strong",{children:"Edit"}),", ",e.jsx("strong",{children:"Delete"}),",",e.jsx("strong",{children:" Select/Unselect Row"}),", ",e.jsx("strong",{children:"Expand / Collapse"}),",",e.jsx("strong",{children:" Expand All / Collapse All"})," and ",e.jsx("strong",{children:"Cut / Copy / Paste"}),". Right-click a header cell for ",e.jsx("strong",{children:"Sort Ascending / Descending"})," and",e.jsx("strong",{children:" Auto Fit"}),". Right-click the pager for paging commands."]}),e.jsx(R,{ref:d,dataSource:k,isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal"},contextMenuSettings:{enabled:!0,items:["Edit","Delete","SelectRow","UnselectRow","ClearRowSelection","ClearSelection","Expand","Collapse","ExpandAll","CollapseAll","Cut","Copy","Paste","AutoFit","SortAscending","SortDescending","AutoFitAll","FirstPage","NextPage","LastPage"]},clipboardSettings:{enabled:!0,allowPaste:!0,allowCut:!0},pageSettings:{enabled:!0,pageSize:30,pageSizeMode:A.Root},sortSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},onDataChangeComplete:g,height:"520px",style:{marginTop:"12px"},modules:t,children:e.jsxs(P,{children:[e.jsx(a,{field:"id",headerText:"ID",isPrimaryKey:!0,width:80}),e.jsx(a,{field:"name",headerText:"Task",width:260}),e.jsx(a,{field:"owner",headerText:"Owner",width:120}),e.jsx(a,{field:"effort",headerText:"Effort (h)",width:110,textAlign:"Right"}),e.jsx(a,{field:"status",headerText:"Status",width:120})]})}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsxs("h3",{children:["Source data (v",u,")"]}),e.jsx("pre",{style:{maxHeight:"220px",overflow:"auto",background:"#f6f8fa",padding:"12px"},children:JSON.stringify(r.current,null,2)})]})]})},$={title:"Grid/Tree ContextMenu/Nested Children",component:l};var x,f,m,C,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef>(null);
  const datasourceRef = useRef<Task[] | null>(null);
  if (datasourceRef.current === null) {
    datasourceRef.current = createSeedData();
  }
  const [previewVersion, setPreviewVersion] = useState<number>(0);
  const gridModules = {
    TreeDataModule,
    EditModule,
    ContextMenuModule,
    ClipboardModule,
    PagerModule,
    AutoFitModule,
    ResizeModule
  };
  const refreshPreview = (): void => {
    setPreviewVersion((version: number): number => version + 1);
  };
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid Context Menu - Nested Children Mode</h1>\r
            <p>\r
                Right-click a tree row for <strong>Edit</strong>, <strong>Delete</strong>,\r
                <strong> Select/Unselect Row</strong>, <strong>Expand / Collapse</strong>,\r
                <strong> Expand All / Collapse All</strong> and <strong>Cut / Copy / Paste</strong>.\r
                Right-click a header cell for <strong>Sort Ascending / Descending</strong> and\r
                <strong> Auto Fit</strong>. Right-click the pager for paging commands.\r
            </p>\r
            <Grid ref={gridRef} dataSource={data} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField='children' editSettings={{
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal'
    }} contextMenuSettings={{
      enabled: true,
      items: ['Edit', 'Delete', 'SelectRow', 'UnselectRow', 'ClearRowSelection', 'ClearSelection', 'Expand', 'Collapse', 'ExpandAll', 'CollapseAll', 'Cut', 'Copy', 'Paste', 'AutoFit', 'SortAscending', 'SortDescending', 'AutoFitAll', 'FirstPage', 'NextPage', 'LastPage']
    }} clipboardSettings={{
      enabled: true,
      allowPaste: true,
      allowCut: true
    }} pageSettings={{
      enabled: true,
      pageSize: 30,
      pageSizeMode: PageSizeMode.Root
    }} sortSettings={{
      enabled: true
    }} selectionSettings={{
      enabled: true,
      mode: 'Multiple',
      type: 'Row'
    }} onDataChangeComplete={refreshPreview} height='520px' style={{
      marginTop: '12px'
    }} modules={gridModules}>\r
                <Columns>\r
                    <Column field='id' headerText='ID' isPrimaryKey={true} width={80} />\r
                    <Column field='name' headerText='Task' width={260} />\r
                    <Column field='owner' headerText='Owner' width={120} />\r
                    <Column field='effort' headerText='Effort (h)' width={110} textAlign='Right' />\r
                    <Column field='status' headerText='Status' width={120} />\r
                </Columns>\r
            </Grid>\r
\r
            <div style={{
      marginTop: '16px'
    }}>\r
                <h3>Source data (v{previewVersion})</h3>\r
                <pre style={{
        maxHeight: '220px',
        overflow: 'auto',
        background: '#f6f8fa',
        padding: '12px'
      }}>\r
                    {JSON.stringify(datasourceRef.current, null, 2)}\r
                </pre>\r
            </div>\r
        </div>;
}`,...(m=(f=l.parameters)==null?void 0:f.docs)==null?void 0:m.source},description:{story:`TreeGrid Context Menu - Nested Children Mode.\r

Right-click a tree row to use the CRUD, selection, expansion and clipboard\r
commands; right-click a header cell for sort and auto-fit; right-click the\r
pager for paging. The preview block below the grid prints the authoritative\r
source after every mutation.`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};const _=["TreeGridContextMenuNested"];export{l as TreeGridContextMenuNested,_ as __namedExportsOrder,$ as default};
