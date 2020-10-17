---
title: p5.jsによるパーティクルの作り方
description: p5.jsを使ってパーティクルを表現する方法を紹介します。パーティクルを実装することでいろいろな表現が可能です。
tags: ['p5.js']
position: 3
date: 2020-09-24
---

## p5.jsの環境構築

p5.jsの環境構築はこちらの方の[記事](http://blog.livedoor.jp/reona396/archives/55825220.html)を参考にしてください。

## パーティクルの考え方

パーティクルを作成するにあたりクラスの知識やちょっとした物理の知識があると、理解が早いと思います。私が実装するパーティクルにはParticleSystemとParticleというクラスが存在してParticleSystemクラスはパーティクルの集合を管理し、Particleクラスは一つ一つのパーティクルの位置や速度、加速度、形状などのパラメータを設定するクラスです。

## パーティクルの作り方

### セットアップ

ここでは、試しにパーティクルを一つだけ描画しています。イメージとしてはParticleSystemでパーティクルを作成していきParticleクラスで位置を指定しています。
ここでは試しに中央に配置しています。

``` js{}[sketch.js]
function setup() {
  createCanvas(windowWidth, windowHeight)
  background('333')
  ps = new ParticleSystem()
  ps.addParticle()
}

function draw() {
  background('#333')
  ps.run()
}

class ParticleSystem {
  constructor() {
    this.particles = []
  }

  addParticle() {
    const particle = new Particle()
    this.particles.push(particle)
  }

  run() {
    this.particles.forEach(particle => {
      particle.run()
    })
  }
}

class Particle {
  constructor() {
    this.position = createVector(width / 2, height / 2)
    this.size = 30
  }

  run() {
    this.display()
  }

  display() {
    circle(this.position.x, this.position.y, this.size)
  }
}
```

![動かないパーティクル](/img/sticked_particle.png)

### パーティクルを動かす

パーティクルを動かすにはパーティクルの座標に速度を加え続けることでパーティクルを動いているようにみせることができます。p5.jsではデフォルトのフレームレートが60なので1秒間に60回draw関数を実行し、さらにパーティクルに速度を加えます。

createVectorで作成したベクトル同士はadd関数でたすことができるのでthis.postition.add(this.velocity)とすることで位置に速度を足すことができます。

こうすることで、いわゆる等速直線運動を表現することができます。

``` js{}[sketch.js]
// 変更点

class Particle {
  constructor() {
    this.position = createVector(width / 2, height / 2)
    this.velocity = createVector(1, 0)
    this.size = 30
  }

  run() {
    this.update()
    this.display()
  }

  update() {
    this.position.add(this.velocity)
  }

  display() {
    circle(this.position.x, this.position.y, this.size)
  }
}
```

![等速直線運動のパーティクル](/img/constant_velocity_particle.gif)

### 加速度を加える

さらに速度に対して加速を加えることで等加速度直線運動を表現することができます。重力なども表現することが可能です。

わかりやすいように初期位置を調整しました。

``` js{}[sketch.js]
// 変更点

class Particle {
  constructor() {
    this.position = createVector(0, height / 2)
    this.velocity = createVector(1, 0)
    this.acceleration = createVector(0.01, 0)
    this.size = 30
  }

  run() {
    this.update()
    this.display()
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
  }

  display() {
    circle(this.position.x, this.position.y, this.size)
  }
}
```

ちょっとわかりずらいかもしれませんが...
このようになります。

![等加速直線運動のパーティクル](/img/constant_acceleration.gif)

### 複数のパーティクルを配置する

一つのパーティクルを動かすことができたので、あとは複数ぱパーティクルをそれぞれ動かすことで様々な表現が可能です。さらに位置や速度などのパラメーターをrandomで調整したり、今回は円を描画していましたが、他の図形や図形の組み合わせを動かすことも可能です。

``` js{}[sketch.js]
function setup() {
  const numParticles = 10

  createCanvas(windowWidth, windowHeight);
  background('#333');
  ps = new ParticleSystem();

  // numParticles分のパーティクルを作成する
  for (let i = 0; i < numParticles; i++) {
    ps.addParticle();
  }
}

function draw() {
  // 背景初期化用
  background('#333');
  ps.run();
}

class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  addParticle() {
    const particle = new Particle();
    this.particles.push(particle);
  }

  run() {
    this.particles.forEach((particle) => {
      particle.run();
    });
  }
}

class Particle {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(random(-0.01, 0.01), random(-0.01, 0.01))
    this.size = 30
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity);
  }

  display() {
    stroke('fafafa')
    noFill()
    circle(this.position.x, this.position.y, this.size)
  }
}
```

![バラバラな動きをするパーティクル](/img/particles.gif)

## 終わりに

この記事では、p5.jsで簡単なパーティクルを実装しました。三角関数を加えた動きとかよく見るようなパーティクルはこれからも紹介していきたいです。