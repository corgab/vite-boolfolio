<template>
    <div>
        <h1>contacts</h1>
        <form method="post">
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
                <label for="mail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="mail" aria-describedby="emailDesc">
                <div id="emailDesc" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>