# environment
osx
# yo
npm install -g yo
# create empty web project
> yo aspnet 

f select empty web application
# package add
> dotnet add package Microsoft.AspNetCore.Mvc

> dotnet add package Microsoft.AspNetCore.StaticFiles

> dotnet add package Microsoft.EntityFrameworkCore.SqlServer

> dotnet add package Microsoft.EntityFrameworkCore.Design

> dotnet restore

# add dbcontext and poco entity
> cd mywebproject

> mkdir models && cd

> touch BlogContext.cs

 add constructor otherwise ef migration failure

* blogcontext.cs look like:

# add appsettings
 enter project root dir

> touch appsettings.json 

 add databaseConnection in appsettings.json

```js {
    "ConnectionStrings":{
        "DefaultConnection":"server=.;database=mytest;user id=sa;password=*"
    }
 }
```
# inject
open start.cs file

# ef migaration
* in .csproject file add section
```js
 <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools">
      <Version>1.1.1</Version>
    </DotNetCliToolReference>
    <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet">
      <Version>1.0.1</Version>
    </DotNetCliToolReference>
```
> dotnet restore
增加以上库使为了启动数据库迁移指令

> dotnet ef migrations add inital

> dotnet ef database update

> dotnet ef migrations remove

# project reference
## create sln 
> dotnet new sln

It should be noted the .sln file is also named the same as it's parent folder;
## add project to sln
> dotnet sln add 'aspnetsample.csproj'
## add project reference
> dotnet add 'a.csproj' reference 'b.lib.csproj'

