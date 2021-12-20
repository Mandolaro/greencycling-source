<script>
    import Share from "$lib/Share.svelte";
    import About from "$lib/About.svelte";
    import {username, isLogin} from "/src/routes/seller/store.js"
    let loggedin = false;
    let yes = false;
    let password = "";
    let loginmenu = false;
    isLogin.subscribe(value => {
		loggedin = value;
	});
    let newusername = "";
    let email = "";
    let newpassword = "";
    let confirm = "";
    let signupmenu = false;

    let passwords = {
        john: "password",
    };

    function login() {
        if (loginmenu && passwords[$username] == password)
        {
            loggedin = true;
            isLogin.set(true);
        } 
        else alert("Wrong username or password");
        loginmenu = false;
    }
    function signup() {
        passwords[newusername] = newpassword;
        alert("created account successfully");
        newusername = "";
        email = "";
        newpassword = "";
        confirm = "";
        signupmenu = false;
    }
</script>

<svelte:head>

    <title>Welcome to GREENCYCLING</title>
</svelte:head>

<div
    class="fixed z-10 bg-white inset-x-0 top-0 h-24  bg-opacity-60 backdrop-blur-2xl"
>
    <div
        class="flex items-center justify-between max-w-5xl h-full mx-auto px-8"
    >
        <h1 class="font-bold text-xl">GREENCYCLING</h1>
        {#if !loggedin}
            <div class="flex items-center">
                <div
                    class="mr-10 cursor-pointer hover:underline"
                    on:click={() => (signupmenu = true)}
                >
                    Sign up
                </div>
                <div
                    class="btn btn-pink"
                    href="#"
                    on:click={() => (loginmenu = true)}
                >
                    Sign in
                </div>
            </div>
        {:else}
            <div class="flex items-center space-x-10">
                <p>Hello, <strong> {$username} </strong></p>
                <a href="/seller" class="btn btn-pink">Profile</a>
            </div>
        {/if}
    </div>
</div>

<div class="h-screen relative">
    <div class="absolute inset-8 bottom-8 top-24 overflow-hidden">
        <img
            src="/img/background.jpeg"
            alt="background"
            class="h-full object-cover mx-auto rounded-2xl"
        />
        <div class="absolute flex justify-center items-center inset-0">
            <div
                class="p-10 bg-white bg-opacity-40 backdrop-blur-xl rounded-xl flex flex-col items-center"
            >
                <h1 class="font-bold md:text-4xl text-2xl mb-4">Welcome to</h1>
                <h1 class="font-bold md:text-5xl text-3xl">GREENCYCLING</h1>
                <div
                    class="space-x-10 mt-10 overflow-hidden flex"
                    class:hidden={loggedin}
                >
                    <a class="btn" href="#about">About us</a>
                    
                    <div class="btn btn-pink" on:click={() => (loginmenu = true)}>Get started</div>
                </div>
            </div>
        </div>
    </div>
</div>

<Share />
<About />

<div
    class:hidden={!loginmenu}
    class="fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center"
>
    <div class="absolute inset-0" on:click={() => loginmenu = false}></div>
    <div class="p-7 bg-white rounded-xl z-30">
        <h3 class="text-lg text-center font-semibold mb-7">Login</h3>
        <form on:submit|preventDefault={login}>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label for="username-inp">Username</label><input
                    type="text"
                    required
                    id="username-inp"
                    class="border-gray-300 p-2 border-2 rounded-md"
                    bind:value={$username}
                />
            </div>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label for="password-inp">Password</label><input
                    type="password"
                    required
                    id="password-inp"
                    class="border-gray-300 p-2 border-2 rounded-md"
                    bind:value={password}
                />
            </div>
            <div class=" text text-right font-semibold mb-5"><u>Forgot you password</u></div>
            <div class="flex items-center justify-between mb-7 space-x-7" on:click={() => {signupmenu = true; loginmenu = false}}><u>Don't have an account? Click here</u></div>
            <button type="submit" class="btn float-right">Login</button>
           
        </form>
        
    </div>
</div>

<div
    class:hidden={!signupmenu}
    class="fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center"
>
    <div class="absolute inset-0" on:click={() => signupmenu = false}></div>
    <div class="p-7 bg-white rounded-xl z-30">
        <h3 class="text-lg text-center font-semibold mb-7">Login</h3>
        <form on:submit|preventDefault={signup}>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label for="new-username-inp">Username</label><input
                    type="text"
                    required
                    id="new-username-inp"
                    class="border-gray-300 p-2 border-2 rounded-md"
                    bind:value={newusername}
                />
            </div>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label for="email-inp">Email</label><input
                    type="text"
                    required
                    id="email-inp"
                    class="border-gray-300 p-2 border-2 rounded-md"
                    bind:value={email}
                />
            </div>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label for="new-password-inp">Password</label><input
                    type="password"
                    required
                    id="new-password-inp"
                    class="border-gray-300 p-2 border-2 rounded-md"
                    bind:value={newpassword}
                />
            </div>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label for="new-password-verify">Confirm Password</label><input
                    type="password"
                    required
                    id="new-password-verify"
                    class="border-gray-300 p-2 border-2 rounded-md"
                    pattern={newpassword}
                    bind:value={confirm}
                />
            </div>
            <div class="flex items-center justify-between mb-7 space-x-7">
                <label>
                    <input type=checkbox bind:checked={yes}>
                    I accept the terms and conditions
                </label>
            </div>
            
            <button disabled={!yes} type="submit" class="btn float-right">Login</button>
        </form>
    </div>
</div>

<style lang="postcss">
    .btn {
        @apply text-center inline-block p-4 w-32 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white shadow-cyan-600 hover:shadow-cyan-800;
    }

    .btn-pink {
        @apply bg-pink-600 hover:bg-pink-800 shadow-pink-600 hover:shadow-pink-800;
    }
</style>
